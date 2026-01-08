# Design Specification: Alerts

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

### Interactive Element Styling (Strict)
- **Action Button Slot:** - Must render as a transparent button (no background/border).
  - **Typography:** Montserrat, 16px, Bold (700), Underlined.
  - **Color:** Inherit from parent status class (e.g. Error Red).
  - **Layout:** Centered text, 100% width.
- **Dismiss Icon Slot:**
  - Must use a custom 12x12 SVG 'X' icon.
  - **Stroke:** `currentColor` (Inherit from parent status).
  - **Layout:** Top-aligned (flex-start), padded 6px.

> 🤖 **Auto-Generated Spec**
> Use this logic to generate the React Component.

## 1. Component API

| Prop | Values | Default |
| :--- | :--- | :--- |
| **Device** | Mobile, Desktop | Mobile |
| **Type** | Actionable, Callout | Actionable |
| **Status** | Error, Success, Info, Warning | Error |
| **Dismissible** | False, True | False |

## 2. Theming & Tokens

> 🎨 **Color Mapping**

| Status | Background | Border | Text Color |
| :--- | :--- | :--- | :--- |
| Error | `var(--token-5248-377721)` | `var(--token-5248-377726)` | `Inherit` (Matches Border) |
| Success | `var(--token-5248-377747)` | `var(--token-5248-377752)` | `Inherit` (Matches Border) |
| Info | `var(--token-47-102915)` | `var(--token-47-102920)` | `Inherit` (Matches Border) |
| Warning | `var(--token-5248-377733)` | `var(--token-5248-377739)` | `Inherit` (Matches Border) |

## 3. Responsive Layout Rules

| Property | Mobile (<768px) | Desktop (≥768px) |
| :--- | :--- | :--- |
| **Padding** | 11px 14px 11px 14px | 11px 14px 11px 14px |
| **Gap** | 16px | 16px |
| **Width** | Full Width | Intrinsic / Fixed |

## 4. DOM Structure & Slots

**Based on variant:** `Device=Desktop, Type=Actionable, Status=Error, Dismissible=True`

```html
<div class="ds-alert ds-alert--desktop ds-alert--actionable ds-alert--error">
  <div class="ds-alert__main">
    <div class="ds-alert__icon-slot">
      </div>
    <div class="ds-alert__content">
      </div>
  </div>

  <div class="ds-alert__interactive-group">
    <button class="ds-alert__action-slot">
      Action Text
    </button>

    <button class="ds-alert__dismiss-slot">
      <svg width="12" height="12">...</svg>
    </button>
  </div>
</div>