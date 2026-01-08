
## Token Consumption Rules (Mandatory)

- Components MUST NOT define tokens
- Tokens MUST be imported from @org/design-tokens
- If a token is missing, emit a TODO comment
- Hardcoded color values are forbidden

## Styling & Architecture Rules (Mandatory)

- Components MUST use CSS classes for styling
- Components MUST NOT manage hover, active, focus, or disabled visual states in JavaScript
- Visual states MUST be implemented using CSS pseudo-classes
- Tokens MUST be consumed via CSS variables
- Hardcoded color values are forbidden
- Inline styles are allowed ONLY for layout-neutral concerns (e.g. width)
- The component MUST be framework-idiomatic

# Design System Components

## Component: Alerts

> 🎨 **Specs:**
> **Border:** 1px solid #9747ff
> **Radius:** 5px

## Component: Device=Mobile, Type=Actionable, Status=Error, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Mobile, Type=Actionable, Status=Success, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Mobile, Type=Actionable, Status=Info, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Mobile, Type=Actionable, Status=Warning, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Mobile, Type=Callout, Status=Error, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318

## Component: Device=Mobile, Type=Callout, Status=Success, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c

## Component: Device=Mobile, Type=Callout, Status=Info, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9

## Component: Device=Mobile, Type=Callout, Status=Warning, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #934802

## Component: Device=Mobile, Type=Callout, Status=Error, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label

## Component: Device=Mobile, Type=Callout, Status=Success, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label

## Component: Device=Mobile, Type=Callout, Status=Info, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label

## Component: Device=Mobile, Type=Callout, Status=Warning, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label

## Component: Device=Desktop, Type=Callout, Status=Error, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318

## Component: Device=Desktop, Type=Callout, Status=Success, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c

## Component: Device=Desktop, Type=Callout, Status=Info, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9

## Component: Device=Desktop, Type=Callout, Status=Warning, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #934802

## Component: Device=Desktop, Type=Callout, Status=Error, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label

## Component: Device=Desktop, Type=Callout, Status=Success, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label

## Component: Device=Desktop, Type=Callout, Status=Info, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label

## Component: Device=Desktop, Type=Callout, Status=Warning, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label

## Component: Device=Desktop, Type=Actionable, Status=Error, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 13px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 50px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Desktop, Type=Actionable, Status=Success, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 13px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 50px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Desktop, Type=Actionable, Status=Info, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 13px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 50px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Desktop, Type=Actionable, Status=Warning, Dismissible=False

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 13px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 50px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button

## Component: Device=Desktop, Type=Actionable, Status=Error, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 24px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318

## Component: Device=Desktop, Type=Actionable, Status=Success, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 24px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c

## Component: Device=Desktop, Type=Actionable, Status=Info, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 24px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9

## Component: Device=Desktop, Type=Actionable, Status=Warning, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 24px


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #934802

## Component: Device=Mobile, Type=Actionable, Status=Error, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8e9e8 (Token: `VariableID:5248:377721`)
> **Border:** 1px solid #b42318
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Error Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #b42318

## Component: Device=Mobile, Type=Actionable, Status=Success, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e6efec (Token: `VariableID:5248:377747`)
> **Border:** 1px solid #08623c
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 4px 6px 4px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Success Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #08623c

## Component: Device=Mobile, Type=Actionable, Status=Info, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #e8edf6 (Token: `VariableID:47:102915`)
> **Border:** 1px solid #1849a9
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Info Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #1849a9

## Component: Device=Mobile, Type=Actionable, Status=Warning, Dismissible=True

> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 16px
> **Padding:** 11px 14px 11px 14px
> **Background:** #f8efe6 (Token: `VariableID:5248:377733`)
> **Border:** 1px solid #934802
> **Radius:** 6px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 2px 2px 2px 2px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 30px


> 🎨 **Specs:**
> **Layout:** VERTICAL | Gap: 24px
> **Padding:** 7px undefinedpx 7px undefinedpx

Warning Label


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 8px

Action Button


> 🎨 **Specs:**
> **Layout:** HORIZONTAL | Gap: 44px


> 🎨 **Specs:**
> **Layout:** GRID | Gap: undefinedpx
> **Padding:** 6px 6px 6px 6px


> 🎨 **Specs:**
> **Border:** 2px solid #934802


---
