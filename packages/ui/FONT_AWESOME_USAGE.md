To use FontAwesome icons in `packages/ui`, follow these steps:

1.  **Import necessary components:**

    ```typescript
    import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    // For regular icons, import from '@fortawesome/free-regular-svg-icons'
    // import { faHeart } from '@fortawesome/free-regular-svg-icons';
    ```

2.  **Add icons to the library (optional but recommended for performance):**
    If you plan to use many icons, adding them to the library once can improve performance and reduce bundle size.

    ```typescript
    import { library } from "@fortawesome/fontawesome-svg-core";
    // Import all regular icons you plan to use
    import { faHeart } from "@fortawesome/free-regular-svg-icons";
    // Import all solid icons you plan to use
    import {
      faAppleWhole,
      faCheckSquare,
      faCoffee,
      faUser,
    } from "@fortawesome/free-solid-svg-icons";

    library.add(faCoffee, faCheckSquare, faAppleWhole, faUser, faHeart);
    ```

    You can place this setup code in a central file, e.s., `packages/ui/src/lib/fontawesome.ts` and import it once in your main application entry point (e.g., `apps/ems-app/src/app/layout.tsx` or `apps/expo/App.tsx`).

3.  **Use the `FontAwesomeIcon` component:**

    ```typescript
    <FontAwesomeIcon icon={faCoffee} />
    ```

    You can customize the icon with props like `size`, `color`, `className`, etc.

    ```typescript
    <FontAwesomeIcon icon={faCheckSquare} size="lg" color="blue" />
    ```

4.  **Example Component (`packages/ui/src/components/MyIconComponent.tsx`):**

    ```typescript
    import React from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

    // It's recommended to add icons to the library once at a higher level
    // For demonstration, adding them here.
    import { library } from '@fortawesome/fontawesome-svg-core';
    library.add(faUser, faEnvelope, faCalendarDays);

    interface MyIconProps {
      iconName: 'user' | 'envelope' | 'calendar-days';
      size?: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
      color?: string;
    }

    export const MyIconComponent: React.FC<MyIconProps> = ({ iconName, size = '1x', color = 'currentColor' }) => {
      let icon;
      switch (iconName) {
        case 'user':
          icon = faUser;
          break;
        case 'envelope':
          icon = faEnvelope;
          break;
        case 'calendar-days':
          icon = faCalendarDays;
          break;
        default:
          icon = faUser; // Default icon
      }

      return <FontAwesomeIcon icon={icon} size={size} color={color} />;
    };
    ```

Remember to import the specific icons you need from `@fortawesome/free-solid-svg-icons` or `@fortawesome/free-regular-svg-icons`.
