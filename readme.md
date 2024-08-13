# Digital Signage Player - MVP

---

## Features

1. **Playout**: Play video, images, and websites.
2. **Content**: Loads content from slides.json

---

## Todo

### 1. Rebuild Player with Node.js and view enginge

- **Node.js**: Used as the server environment.
- **EJS**: Used as a templating engine to generate HTML pages.
- **Multilayer**: Create an multiple layers for playout or information
- **Layout Templates:** Create templates for layouts, and layers

### 2. Connect a database
- **Models**:
  - **Content**: For storing videos, images, and web links.
  - **Settings**: For user settings and configurations.
  - **User**: For user management and permissions.

### 3. Admin UI

- **Features**:
  - Manage content (videos, images, web links).
  - Schedule of content
  - Create, update, and delete content.
  - Manage users and permissions.
  - Configure system settings.

### 4. Dashboard / Controller 

- **Features**:
  - Overview of ongoing and scheduled playouts.
  - Tools for manually controlling content (start, stop, pause).
  - Tools for playing content with buttonpress
  - Scheduling of content.
- **Technologies**: Build with Node.js and EJS. Use JavaScript for dynamic updates and interactivity.

### 5. Additional Settings

- **Configuration Options**:
  - Manage content scheduling.
  - Customize display settings (transitions, display time, etc.).
  - Manage playback of different content types (video, image, web link).

### 6. More Content Types

- **Extensions**:
  - **Text Content**: Display text-based information.
  - **Documents**: Display PDFs or other documents.
  - **Widgets**: Integrate external widgets (e.g., weather, news).

### 7. Overlay Layer

- **Features**:
  - Display important and urgent information over the current playout.
  - Support for displaying text, images, or videos as overlays.

### 8. API to be controlled from external devices, like iCast or Bitfocus Companion