export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function combineReducers(reducers) {
  let state = Object.keys(reducers).reduce(
    (acc, key) => ({ ...acc, [key]: reducers[key][0] }),
    {}
  );
  const dispatch = async (action) =>
    typeof action === "function"
      ? await action(dispatch, state)
      : Object.keys(reducers).forEach((key) => {
          return reducers[key][1](action);
        });

  return [state, dispatch];
}

export function relativePath() {
  return window.location.pathname.replaceAll("/", "");
}

//function to determine if data has valid values
export function checkData(data) {
  if ((data != null && data != undefined && data != "") || data == "0") {
    return true;
  }
  return false;
}

export const isEmpty = (data) => {
  if (!checkData(data)) return true;
  if (data.constructor == Array && data.length < 1) return true;
  else if (data.constructor == String && data.length < 1) return true;
  else if (data.constructor == Object && Object.keys(data).length == 0)
    return true;
  else return false;
};

const emptyFunc = () => {};

export const Console =
  process.env.NODE_ENV == "production"
    ? { warn: emptyFunc, log: emptyFunc, error: emptyFunc }
    : console;

export function setCookie(cname, cvalue, exdays = 1) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname +
    "=" +
    cvalue +
    ";" +
    expires +
    `; path=/; domain=${window.location.hostname}`;
}

export function getCookie(cname, cookie) {
  let name = cname + "=";
  let tousecookie = cookie || document.cookie;
  let ca = tousecookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deleteCookie(cname) {
  if (window.location.origin.includes("boxin.ng")) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=boxin.ng`;
  } else {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}

let lastCookie = document.cookie;
export function listenCookieChange(callback, keys = [], interval = 1000) {
  setInterval(() => {
    let cookie = document.cookie;
    let haskeys = Array.isArray(keys) && keys.length > 0;
    let returnobj = {};
    if (cookie !== lastCookie) {
      try {
        if (haskeys) {
          keys.forEach((key) => {
            let olddata = getCookie(`${key}`, lastCookie || "coookie");
            let currentdata = getCookie(`${key}`);
            // console.warn("olddata", olddata);
            // console.warn("newdata", currentdata);
            if (olddata != currentdata) {
              returnobj[`${key}`] = { old: olddata, new: currentdata };
            }
          });
        }
        if (haskeys && !isEmpty(returnobj)) {
          callback(returnobj);
        }
        if (!haskeys) callback({ oldValue: lastCookie, newValue: cookie });
      } finally {
        console.warn("here");
        lastCookie = cookie;
      }
    }
  }, interval);
}

export function checkUrl(pathname, navigate) {
  if (!pathname || !navigate) {
    return;
  }
  let access = getCookie("id1");
  let refresh = getCookie("id2");
  if ((!access || !refresh) && pathname != "/") {
    // toast("Please login in to access this page", {
    //   ...REACT_TOAST_SUCCESS_OPTIONS,
    //   toastId: "notloginedurltoast",
    //   autoClose: 500,
    //   type: toast.TYPE.INFO,
    // });
    navigate("/", { replace: true });
    // window.location.replace("/");
  }
}

export function getAuthBaseUrl() {
  let nextport = 1 + parseInt(window.location.port);
  if (window.location.origin.includes("boxin.ng")) {
    return "https://login.boxin.ng";
  }
  return `http://${window.location.hostname}:${nextport}`;
}

export async function copyText(txt, okAction, failedAction) {
  try {
    if (isEmpty(txt)) {
      return;
    }
    await navigator.clipboard.writeText(txt);
    okAction && okAction();
  } catch (err) {
    failedAction && failedAction();
    Console.warn("copytext err", String(err));
  }
}

export const isPath = (data = "", exact = false) => {
  let pathname = window.location.pathname;
  if (!data) {
    return false;
  }
  if (exact) return pathname == data;
  else return pathname.indexOf(data) > -1 ? true : false;
};

export const goFullScreenMode = () => {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
};
