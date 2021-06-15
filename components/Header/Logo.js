import { VisuallyHidden, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorMode } from "@chakra-ui/react";

export default function Logo() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "#4d4d4d",
    dark: "#fff",
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.03 131.89">
      <defs>
        <style>
          {`.outline-color{ fill: ${iconColor[colorMode]} }`}
          {`.light-on-color { fill: #fcc921; opacity: 0; }`}
        </style>
      </defs>
      <g id="Lightbulb">
        <path
          id="LightbulbOn"
          className="light-on-color"
          d="M225.71 40.75a37.91 37.91 0 01-8.17 22.1c-2.68 3.52-5.22 5.62-9.06 8.79-4.67 3.86-9.21 6.71-16.08 11-3 1.86-9.09 6.2-9.45 6.48l-.17.14a4.27 4.27 0 01-3.21 1.41h-.51c-1.41-.08-2.83-.23-4.15-.38-.47-.06-.95-.1-1.44-.15a25.78 25.78 0 01-6.18-1.14 2.43 2.43 0 01-1.57-1.4 2 2 0 01.16-1.53l-1.12-.27a2.64 2.64 0 01-3 1.78 12.66 12.66 0 01-2.58-.35l-.48-.1-.45-.09a15.21 15.21 0 01-5-1.59c0-.47-.09-.92-.15-1.38l-.53-2.6a17.75 17.75 0 00-.61-1.73c.14-.51.31-1 .49-1.64a38.57 38.57 0 002.05-11.09c.07-5.35-.1-8.7-.25-11.66s-.27-5.34-.17-8.94c.16-5.31.25-8.23 1.2-12.19a39.89 39.89 0 019.43-18.17c2.17-2.35 8.77-9.52 19.77-11.42a32.53 32.53 0 015.4-.46 35.58 35.58 0 0111.74 2.11A35.15 35.15 0 01220 20.1a34.64 34.64 0 015.71 20.65z"
          fill="#fcc921"
        />
        <path
          id="Bulb"
          className="outline-color"
          d="M228.75 48.72A45.26 45.26 0 01221 65.81a54.1 54.1 0 01-15.13 13.31c-1 .62-1.46.88-4.87 3 0 0-3.13 1.89-10.85 6.76-.59.38-4.78 2.83-4.67 4.43s.57 3.08-.33 4.62a4.19 4.19 0 01-4.4 2l-27.47-5.6v-7.56a19.35 19.35 0 00-.21-2.66c1.24 1.3 4.22 1.76 5.8 2.07 1.3.26 3.42.86 4.6 0 .5-.39 3.19-7.69 3.61-10.28.18-1.09 1.36-7.25 1.87-9.88a2.85 2.85 0 00-.29-2 7.41 7.41 0 01-1.06-5 9.56 9.56 0 013.36-5.59 19.31 19.31 0 014.71-2.85A2.49 2.49 0 00177 48a9.88 9.88 0 012.28-7 15.23 15.23 0 016.07-4.25 1.9 1.9 0 001.19-2 9.76 9.76 0 012.15-7.41 14.09 14.09 0 018.31-4.7 3.62 3.62 0 01.67-.07 1.4 1.4 0 011.15.47 1.16 1.16 0 01.18.96 2.65 2.65 0 01-1.42 1.53q-.76.38-1.56.72a25.13 25.13 0 00-3.25 1.75c-1.35.92-4.31 3.42-2.45 7.08a5.62 5.62 0 001.84 2.13 8.58 8.58 0 005.06 1.43 16.22 16.22 0 003.38-.4 4.65 4.65 0 001.68-.66 1.43 1.43 0 00.61-1.33c-.12-.62-.83-1-1.24-1.16a6.71 6.71 0 00-2.44-.43 10.75 10.75 0 00-2.73.39 5.23 5.23 0 01-1.18.15c-1.18 0-1.53-.61-1.63-1-.28-1 .69-1.74 1.59-2.07a11.83 11.83 0 014-.8 7.47 7.47 0 013.61.86 5.1 5.1 0 011.3 1c1.41 1.5 2.18 4 .91 6a6.22 6.22 0 01-4.24 2.41 13.84 13.84 0 01-2.82.29 15 15 0 01-6.6-1.53l-.46-.22a5.53 5.53 0 00-2.25-.79 5.9 5.9 0 00-2.68.85 15.62 15.62 0 00-4 2.63 5.44 5.44 0 00-1.83 4 4.9 4.9 0 001.83 3.49 8.31 8.31 0 003.75 1.72 12 12 0 002.74.29 12.61 12.61 0 002-.15c1.19-.18 2.63-.81 2.71-1.94.31-3.33-5.53-1.36-7-1.36a4 4 0 01-.78-.06 1.6 1.6 0 01-1-.51 1.4 1.4 0 01.16-1.8 3.32 3.32 0 011.4-.76 14.62 14.62 0 014.11-.69 7.28 7.28 0 014.12 1.15 5 5 0 012.2 3.32c.45 3.13-2.26 5-4.74 5.66a12.39 12.39 0 01-3.19.4 14.4 14.4 0 01-5.69-1.18c-.28-.11-.56-.24-.82-.37a9.56 9.56 0 00-2.64-.92h-.52a7.78 7.78 0 00-4.13 1.52c-3.24 2.1-4.4 4.51-3.46 7.17a5.21 5.21 0 001.54 2.19 8.22 8.22 0 005.42 1.82 15.68 15.68 0 003.79-.53c.78-.22 2.24-.86 2.06-1.84a1.7 1.7 0 00-1-1.05 5.55 5.55 0 00-2.51-.54 11.57 11.57 0 00-2.57.35 5.45 5.45 0 01-1.31.19c-1.18 0-1.62-.56-1.77-1a1.69 1.69 0 01.72-1.85 3.77 3.77 0 011.68-.55 19.53 19.53 0 013.22-.34 8.8 8.8 0 013.1.52c2 .71 3.87 2.76 3.57 5.12a4.8 4.8 0 01-2.19 3.27 9 9 0 01-3.65 1.32 18.2 18.2 0 01-2.73.24 17 17 0 01-4.45-.95 2.12 2.12 0 00-2.73 1.61c-.48 2.42-.92 4.33-1.12 5.79a41.61 41.61 0 01-3.32 10.6 1.46 1.46 0 00-.33 1.15c.15.45.67.65 1 .76A33.46 33.46 0 00175 89.3c1.37.15 2.73.29 4.1.37 1.64.1 2-.28 3.21-1.32.47-.37 6.6-4.69 9.54-6.54 6.93-4.35 11.36-7.13 16-10.93 3.8-3.14 6.3-5.21 8.92-8.64a37.2 37.2 0 008-21.53 34.1 34.1 0 00-5.51-20.07 34.51 34.51 0 00-18.01-13.38 33 33 0 00-16.64-1.61c-10.45 1.81-16.76 8.45-19.21 11.11a39.12 39.12 0 00-9.2 17.73c-.92 3.85-1 6.69-1.16 12-.22 7.35.55 10.15.42 20.59-.09 6.69-2.42 11.61-2.94 14.45a18.34 18.34 0 00-4.15-7.31c.87-8.09 1.3-12.14 1.35-14.67.2-9.33-.42-9.53-.1-15.74.29-5.62.49-9.36 1.83-13.91a43 43 0 0111.59-18.6 39.27 39.27 0 0116.88-9.94 40.95 40.95 0 0138.63 10.2 38.88 38.88 0 019.62 15.32 39.76 39.76 0 01.58 21.84z"
        />
        <path
          id="SocketThreadTwo"
          className="outline-color"
          d="M176.35 103.26l-24.77-5a17.17 17.17 0 01.73 1.84 19.67 19.67 0 01.52 1.9c.13.64.24 1.29.31 2a19 19 0 01.11 2v1l21.48 4.38a4.17 4.17 0 001.66-8.17z"
        />
        <path
          id="SocketThreadOne"
          className="outline-color"
          d="M170.25 114.91l-17.74-3.62a18.24 18.24 0 01-4.45 7.6l20.52 4.18a4.16 4.16 0 101.67-8.16z"
        />
        <path
          id="SocketBottom"
          className="outline-color"
          d="M154.58 124.38l-10.75-2.19a18.15 18.15 0 01-3 1.35 7.48 7.48 0 0014.75 2.37 1.31 1.31 0 00-1-1.53z"
        />
      </g>
      <g id="Text">
        <path
          id="DesignLetterD"
          className="outline-color"
          d="M25.21 58a12.25 12.25 0 01-3.69 8.86 12.18 12.18 0 01-8.86 3.69H0V27.2h12.66a12.18 12.18 0 018.86 3.69 12.25 12.25 0 013.69 8.86zM15.12 39.79a2.53 2.53 0 00-2.5-2.5h-2.53v23.2h2.53a2.37 2.37 0 001.76-.74 2.45 2.45 0 00.74-1.75z"
        />
        <path
          id="DesignLetterE"
          className="outline-color"
          d="M38.06 37.29v8.09h10.09v10.08H38.06v5.07h12.09v10.09H28V27.2h22.15v10.09z"
        />
        <path
          id="DesignLetterS"
          className="outline-color"
          d="M65.88 26.18A12.54 12.54 0 0178 38.77v5.16H68v-5.16a2.41 2.41 0 00-.78-1.77 2.54 2.54 0 00-3.38-.18.73.73 0 00-.17.18l-.14.17c-.05.07-.08.13-.11.18 0 .07-.08.13-.11.18a1.81 1.81 0 00-.1.17v.11L63 38V38.24a.82.82 0 010 .14v4.47a2.48 2.48 0 002.5 2.5h.45A12.54 12.54 0 0178 58a12.53 12.53 0 01-12.57 12.58H52.84V60.49h12.59A2.53 2.53 0 0068 58a2.53 2.53 0 00-2.53-2.54h-.5a12.61 12.61 0 01-12.13-12.55v-4.18a12.6 12.6 0 0112.55-12.55z"
        />
        <path
          id="DesignLetterI"
          className="outline-color"
          d="M90 70.62H79.86V27.2H90z"
        />
        <path
          id="DesignLetterG"
          className="outline-color"
          d="M106.1 26.14a12.06 12.06 0 018.58 3.86 12.23 12.23 0 013.55 8.79v5.11h-10.09v-5.13a2.51 2.51 0 00-2.49-2.54 2.5 2.5 0 00-1.62.57.58.58 0 00-.18.17l-.17.18-.14.21a.72.72 0 00-.11.15l-.07.21-.07.11v.1a.58.58 0 010 .14v20.98a2.51 2.51 0 002.53 2.53h2.49v-4h-2.39v-10.1h12.48v23.63l-12.13.56h-.52A12.6 12.6 0 0193 59.09V38.7a12.62 12.62 0 0112.55-12.56z"
        />
        <path
          id="DesignLetterN"
          className="outline-color"
          d="M131.26 48l5.06 11.81v10.74h6.41c.62-5.79 1-9.2 1-11.19.09-4.51 0-6.74-.1-8.7a65.85 65.85 0 010-7.23c.3-5.84.52-10.06 2.06-15.29.08-.27.17-.58.28-.91h-9.66v12.06l-5.06-11.81v-.25h-10v43.32h10z"
        />
        <path
          id="GeniusLetterG"
          className="outline-color"
          d="M13.22 74.14A12.1 12.1 0 0121.8 78a12.27 12.27 0 013.55 8.79v5.11H15.26v-5.13a2.45 2.45 0 00-.74-1.8 2.41 2.41 0 00-1.76-.74 2.5 2.5 0 00-1.62.57.55.55 0 00-.14.2l-.18.18-.14.21a.65.65 0 00-.1.15l-.07.21-.07.11v.1a.82.82 0 010 .14v20.92a2.45 2.45 0 00.74 1.79 2.41 2.41 0 001.79.74h2.5v-4h-2.6V95.48h12.48v23.63l-12.13.56h-.53A12.17 12.17 0 013.83 116a12.29 12.29 0 01-3.69-8.89V86.7a12.23 12.23 0 013.69-8.86 12.22 12.22 0 018.86-3.7z"
        />
        <path
          id="GeniusLetterE"
          className="outline-color"
          d="M38.16 85.29v8.09h10.09v10.08H38.16v5.07h12.1v10.09H28.07V75.2h22.19v10.09z"
        />
        <path
          id="GeniusLetterN"
          className="outline-color"
          d="M78.12 75.23v43.32H68.06v-10.73L63 96v22.54H53V75.23h10v.25l5.06 11.81V75.23z"
        />
        <path
          id="GeniusLetterI"
          className="outline-color"
          d="M90.72 118.62H80.63V75.2h10.09z"
        />
        <path
          id="GeniusLetterU"
          className="outline-color"
          d="M119 75.23v31.82a12.59 12.59 0 01-25.17 0V75.23H104v31.82a2.53 2.53 0 002.5 2.5 2.45 2.45 0 001.79-.74 2.41 2.41 0 00.74-1.76V75.23z"
        />
        <path
          id="GeniusLetterS"
          className="outline-color"
          d="M135.13 74.18a12.55 12.55 0 0112.13 12.59v5.16H137.2v-5.16a2.37 2.37 0 00-.74-1.76 2.45 2.45 0 00-1.79-.74 2.39 2.39 0 00-1.58.56.77.77 0 00-.18.18.61.61 0 00-.14.17.85.85 0 00-.1.18.85.85 0 00-.1.18.94.94 0 00-.11.17v.49a.38.38 0 010 .14v4.47a2.48 2.48 0 002.5 2.5h.46a12.59 12.59 0 01-.46 25.17h-12.88v-9.99h12.59a2.41 2.41 0 001.79-.74 2.35 2.35 0 00.74-1.75 2.53 2.53 0 00-2.53-2.54h-.49a12.61 12.61 0 01-12.1-12.55v-4.18a12.62 12.62 0 0112.55-12.55z"
        />
      </g>
    </svg>
  );
}
