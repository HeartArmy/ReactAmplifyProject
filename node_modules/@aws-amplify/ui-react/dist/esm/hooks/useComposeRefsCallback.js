import*as e from"react";function r({externalRef:r,internalRef:n}){return e.useCallback((e=>{"function"==typeof r?r(e):null!==r&&(r.current=e),n.current=e}),[r,n])}export{r as useComposeRefsCallback};
