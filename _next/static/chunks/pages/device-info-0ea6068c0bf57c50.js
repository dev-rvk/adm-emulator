(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{7827:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/device-info",function(){return i(6354)}])},6354:function(e,n,i){"use strict";i.r(n);var s=i(2420),r=i(5934),a=i(7044),o=i(4479),t=i(8046),l=i(3844),d=i(513),c=i(5862),u=i(6912),m=i.n(u),p=i(6399),g=i(3778);let f={[d.AdbFeature.ShellV2]:'"shell" command now supports separating child process\'s stdout and stderr, and returning exit code',[d.AdbFeature.StatV2]:'"sync" command now supports "STA2" (returns more information of a file than old "STAT") and "LST2" (returns information of a directory) sub command',[d.AdbFeature.ListV2]:'"sync" command now supports "LST2" sub command which returns more information when listing a directory than old "LIST"',[d.AdbFeature.FixedPushMkdir]:"Android 9 (P) introduced a bug that pushing files to a non-existing directory would fail. This feature indicates it's fixed (Android 10)",[d.AdbFeature.AbbExec]:'Supports "abb_exec" variant that can be used to install App faster',sendrecv_v2_brotli:'Supports "brotli" compression algorithm when pushing/pulling files',sendrecv_v2_lz4:'Supports "lz4" compression algorithm when pushing/pulling files',sendrecv_v2_zstd:'Supports "zstd" compression algorithm when pushing/pulling files'};n.default=(0,c.Pi)(()=>{var e,n,i,d;return(0,s.jsxs)(r.K,{...g.LE,children:[(0,s.jsx)(m(),{children:(0,s.jsx)("title",{children:"Device Info"})}),(0,s.jsxs)(a.c,{delayedRender:!1,children:[(0,s.jsx)("code",{children:"ro.product.name"}),(0,s.jsx)("span",{children:" field in Android Build Props"})]}),(0,s.jsxs)("span",{children:["Product Name: ",null===(e=p.GLOBAL_STATE.adb)||void 0===e?void 0:e.banner.product]}),(0,s.jsx)(o.Z,{}),(0,s.jsxs)(a.c,{delayedRender:!1,children:[(0,s.jsx)("code",{children:"ro.product.model"}),(0,s.jsx)("span",{children:" field in Android Build Props"})]}),(0,s.jsxs)("span",{children:["Model Name: ",null===(n=p.GLOBAL_STATE.adb)||void 0===n?void 0:n.banner.model]}),(0,s.jsx)(o.Z,{}),(0,s.jsxs)(a.c,{delayedRender:!1,children:[(0,s.jsx)("code",{children:"ro.product.device"}),(0,s.jsx)("span",{children:" field in Android Build Props"})]}),(0,s.jsxs)("span",{children:["Device Name: ",null===(i=p.GLOBAL_STATE.adb)||void 0===i?void 0:i.banner.device]}),(0,s.jsx)(o.Z,{}),(0,s.jsxs)(a.c,{delayedRender:!1,children:[(0,s.jsx)("span",{children:"Feature list decides how each individual commands should behavior."}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:["For example, it may indicate the availability of a new command,"," "]}),(0,s.jsx)("span",{children:"or a workaround for an old bug is not required because it's already been fixed."}),(0,s.jsx)("br",{})]}),(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:"Features: "}),null===(d=p.GLOBAL_STATE.adb)||void 0===d?void 0:d.banner.features.map((e,n)=>(0,s.jsxs)("span",{children:[0!==n&&(0,s.jsx)("span",{children:", "}),(0,s.jsx)("span",{children:e}),f[e]&&(0,s.jsx)(t.G,{content:(0,s.jsx)("span",{children:f[e]}),children:(0,s.jsx)(l.J,{style:{marginLeft:4},iconName:g.PJ.Info})})]},e))]})]})})},7044:function(e,n,i){"use strict";i.d(n,{c:function(){return E}});var s,r,a,o,t,l=i(7134),d=i(5235),c=i(1714),u=i(2810),m=i(6638),p=i(6884),g=i(4159),f=i(7005),h=i(3844),x=i(8934),v=i(2443),b=i(8432),w=((s={})[x.f.info]="Info",s[x.f.warning]="Info",s[x.f.error]="ErrorBadge",s[x.f.blocked]="Blocked2",s[x.f.severeWarning]="Warning",s[x.f.success]="Completed",s),B=(0,u.y)(),S=function(e){switch(e){case x.f.blocked:case x.f.error:case x.f.severeWarning:return"assertive"}return"polite"},L=function(e){switch(e){case x.f.blocked:case x.f.error:case x.f.severeWarning:return"alert"}return"status"},k=c.forwardRef(function(e,n){var i=(0,v.k)(!1),s=i[0],r=i[1].toggle,a=(0,b.M)("MessageBar"),o=e.actions,t=e.className,l=e.children,u=e.overflowButtonAriaLabel,k=e.dismissIconProps,T=e.styles,M=e.theme,j=e.messageBarType,y=void 0===j?x.f.info:j,A=e.onDismiss,N=void 0===A?void 0:A,E=e.isMultiline,_=void 0===E||E,C=e.truncated,W=e.dismissButtonAriaLabel,I=e.messageBarIconProps,P=e.role,R=e.delayedRender,D=void 0===R||R,F=e.expandButtonProps,J=e.onExpandButtonToggled,O=void 0===J?void 0:J,z=c.useCallback(function(){r(),O&&O(!s)},[s,O,r]),G=(0,m.pq)(e,m.iY,["className","role"]),H=B(T,{theme:M,messageBarType:y||x.f.info,onDismiss:void 0!==N,actions:void 0!==o,truncated:C,isMultiline:_,expandSingleLine:s,className:t}),q=o||N?{"aria-describedby":a,role:"region"}:{},U=o?c.createElement("div",{className:H.actions},o):null,V=N?c.createElement(f.h,{disabled:!1,className:H.dismissal,onClick:N,iconProps:k||{iconName:"Clear"},title:W,ariaLabel:W}):null;return c.createElement("div",(0,d.pi)({ref:n,className:H.root},q),c.createElement("div",{className:H.content},c.createElement("div",{className:H.iconContainer,"aria-hidden":!0},I?c.createElement(h.J,(0,d.pi)({},I,{className:(0,p.i)(H.icon,I.className)})):c.createElement(h.J,{iconName:w[y],className:H.icon})),c.createElement("div",{className:H.text,id:a,role:P||L(y),"aria-live":S(y)},c.createElement("span",(0,d.pi)({className:H.innerText},G),D?c.createElement(g.U,null,c.createElement("span",null,l)):c.createElement("span",null,l))),!_&&!U&&C&&c.createElement("div",{className:H.expandSingleLine},c.createElement(f.h,(0,d.pi)({disabled:!1,className:H.expand,onClick:z,iconProps:{iconName:s?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:u,"aria-expanded":s},F))),!_&&U,!_&&V&&c.createElement("div",{className:H.dismissSingleLine},V),_&&V),_&&U)});k.displayName="MessageBar";var T=i(3298),M={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},j=((r={})[x.f.error]="errorBackground",r[x.f.blocked]="errorBackground",r[x.f.success]="successBackground",r[x.f.warning]="warningBackground",r[x.f.severeWarning]="severeWarningBackground",r[x.f.info]="infoBackground",r),y=((a={})[x.f.error]="errorIcon",a[x.f.blocked]="errorIcon",a[x.f.success]="successIcon",a[x.f.warning]="warningIcon",a[x.f.severeWarning]="severeWarningIcon",a[x.f.info]="infoIcon",a),A=((o={})[x.f.error]="#ff0000",o[x.f.blocked]="#ff0000",o[x.f.success]="#bad80a",o[x.f.warning]="#fff100",o[x.f.severeWarning]="#ff0000",o[x.f.info]="WindowText",o),N=((t={})[x.f.error]="#e81123",t[x.f.blocked]="#e81123",t[x.f.success]="#107c10",t[x.f.warning]="#966400",t[x.f.severeWarning]="#d83b01",t[x.f.info]="WindowText",t),E=(0,l.z)(k,function(e){var n,i,s,r,a,o,t,l,c,u,m,p=e.theme,g=e.className,f=e.onDismiss,h=e.truncated,v=e.isMultiline,b=e.expandSingleLine,w=e.messageBarType,B=void 0===w?x.f.info:w,S=p.semanticColors,L=p.fonts,k=(0,T.sK)(0,T.mV),E=(0,T.Cn)(M,p),_={fontSize:T.ld.xSmall,height:10,lineHeight:"10px",color:S.messageText,selectors:((n={})[T.qJ]=(0,d.pi)((0,d.pi)({},(0,T.xM)()),{color:"WindowText"}),n)},C=[(0,T.GL)(p,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":_,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[E.root,L.medium,B===x.f.error&&E.error,B===x.f.blocked&&E.blocked,B===x.f.severeWarning&&E.severeWarning,B===x.f.success&&E.success,B===x.f.warning&&E.warning,v?E.multiline:E.singleline,!v&&f&&E.dismissalSingleLine,!v&&h&&E.expandingSingleLine,{background:S[j[B]],boxSizing:"border-box",color:S.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:((i={".ms-Link":{color:S.messageLink,selectors:{":hover":{color:S.messageLinkHovered}}}})[T.qJ]=(0,d.pi)((0,d.pi)({},(0,T.xM)()),{background:"transparent",border:"1px solid ".concat(A[B]),color:"WindowText"}),i[T.bO]={border:"1px solid ".concat(N[B])},i)},v&&{flexDirection:"column"},g],content:[E.content,((s={display:"flex",width:"100%",lineHeight:"normal"})[k]={display:"grid",gridTemplateColumns:"auto 1fr auto",gridTemplateRows:"1fr auto",gridTemplateAreas:'\n            "icon text close"\n            "action action action"\n          '},s)],iconContainer:[E.iconContainer,((r={fontSize:T.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"})[k]={gridArea:"icon"},r)],icon:{color:S[y[B]],selectors:((a={})[T.qJ]=(0,d.pi)((0,d.pi)({},(0,T.xM)()),{color:"WindowText"}),a)},text:[E.text,(0,d.pi)((0,d.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},L.small),((o={})[k]={gridArea:"text"},o.selectors=((t={})[T.qJ]=(0,d.pi)({},(0,T.xM)()),t),o)),!f&&{marginRight:12}],innerText:[E.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},h&&{overflow:"visible",whiteSpace:"pre-wrap"},!v&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!v&&!h&&{selectors:((l={})[k]={overflow:"visible",whiteSpace:"pre-wrap"},l)},b&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:[E.dismissSingleLine,((c={})[k]={gridArea:"close"},c)],expandSingleLine:E.expandSingleLine,dismissal:[E.dismissal,C],expand:[E.expand,C],actions:[v?E.actions:E.actionsSingleline,((u={display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",forcedColorAdjust:"auto",MsHighContrastAdjust:"auto"})[k]={gridArea:"action",marginRight:8,marginBottom:8},u.selectors={"& button:nth-child(n+2)":((m={marginLeft:8})[k]={marginBottom:0},m)},u),v&&{marginBottom:8},f&&!v&&{marginRight:0}]}},void 0,{scope:"MessageBar"})},8934:function(e,n,i){"use strict";var s,r;i.d(n,{f:function(){return s}}),(r=s||(s={}))[r.info=0]="info",r[r.error=1]="error",r[r.blocked=2]="blocked",r[r.severeWarning=3]="severeWarning",r[r.success=4]="success",r[r.warning=5]="warning"},4159:function(e,n,i){"use strict";i.d(n,{U:function(){return o}});var s=i(5235),r=i(1714),a=i(2426),o=function(e){function n(n){var i=e.call(this,n)||this;return i.state={isRendered:void 0===(0,a.J)()},i}return(0,s.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this,n=this.props.delay;this._timeoutId=window.setTimeout(function(){e.setState({isRendered:!0})},n)},n.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},n.prototype.render=function(){return this.state.isRendered?r.Children.only(this.props.children):null},n.defaultProps={delay:0},n}(r.Component)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7827)}),_N_E=e.O()}]);
//# sourceMappingURL=device-info-0ea6068c0bf57c50.js.map