import React from "react";
import {
  Container,
  Text,
  Card,
  Grid,
  Popover,
  Button,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";
import { IoIosExpand } from "react-icons/io";

const Home = () => {
  return (
    <main>
      <title>Bytes of Wisdom - Home</title>
      <meta
        name="description"
        content="Welcome to Bytes of Wisdom, your go-to resource for helpful tech tips, software tutorials, and productivity hacks. Join our vibrant community of tech enthusiasts as we explore the latest technologies and provide actionable insights to enhance your digital experience. Boost your productivity, unlock the full potential of your devices, and stay up to date with the exciting world of technology."
      />{" "}
      <meta
        name="keywords"
        content="tech tips, software tutorials, productivity hacks, tech enthusiasts, latest technologies, actionable insights, digital experience, boost productivity, unlock potential, stay up to date, exciting world of technology"
      />
      <Container
        fluid="true"
        className=" max-w-6xl bg-white my-8 rounded-3xl shadow-md"
      >
        <Grid.Container gap={2} justify="center">
          <Grid sm={5}>
            <Container>
              <Text className="text-7xl font-semibold" color="primary">
                Max Productivity? Challenge Accepted.
              </Text>
              <Text blockquote className="text-xl mt-6">
                Get tips and tricks to boost your software development skills
                using{" "}
                <span className="text-semibold text-orange-600">macOS </span>...
              </Text>
            </Container>
          </Grid>
          <Grid sm={7}>
            <Container display="flex" alignItems="center">
              <Image
                src="/macOS.png"
                alt="macOS image"
                width={900}
                height={200}
                className="rounded-lg"
              />
            </Container>
          </Grid>
        </Grid.Container>
      </Container>
      <div className="sm:flex sm:flex-row max-w-6xl mx-auto">
        <Container
          fluid="true"
          className=" max-w-6xl bg-white mb-8 rounded-3xl shadow-md"
        >
          <Text className="text-transparent bg-clip-text bg-gradient-to-bl from-violet-700 to-orange-700 font-light font-[helvetica] text-[24px] px-4 py-12 text-center">
            Let&apos;s begin our productivity journey with the mighty keyboard –
            the ultimate tool for unlocking efficiency. Get ready to dive into
            the world of Mac keyboard shortcuts, where a few simple key
            combinations can work wonders. From blazing through tasks to
            maximizing your workflow, these shortcuts will revolutionize the way
            you interact with your Mac. Let&apos;s unleash the power of the
            keyboard and elevate our productivity to new heights!
          </Text>
        </Container>
        <Spacer x={1} />
        <Container
          fluid="true"
          className=" max-w-6xl bg-white mb-8 rounded-3xl py-10 shadow-md"
        >
          <Text className="text-[28px] font-[roboto] text-green-600 p-4 text-center">
            Mac Keyboard Shortcuts
          </Text>
          <Grid.Container justify="space-around">
            {shortcuts.map((category, index) => (
              <Grid key={index}>
                <Popover placement="bottom">
                  <Popover.Trigger>
                    <Button
                      size={"xl"}
                      iconRight={<IoIosExpand />}
                      className="hover:bg-blue-200 text-blue-500 z-10 "
                    >
                      {Object.keys(category)[0]}
                    </Button>
                  </Popover.Trigger>
                  {category[Object.keys(category)[0]].map((shortcut, i) => (
                    <Popover.Content key={i}>
                      <Card className="rounded-2xl p-6 shadow-2xl">
                        <Card.Body>
                          {Object.entries(shortcut).map(([key, value]) => (
                            <Text blockquote key={key} className="rounded-none">
                              <strong>{key}: </strong>
                              {value}
                            </Text>
                          ))}
                        </Card.Body>
                      </Card>
                    </Popover.Content>
                  ))}
                </Popover>
              </Grid>
            ))}
          </Grid.Container>
        </Container>
      </div>
      <Container fluid className="max-w-6xl">
        <Text className="text-[52px] font-semibold text-purple-700 p-4 text-center">
          Mouse Shortcuts
        </Text>
        <Text className="text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-400 font-light  p-4 text-center">
          Now if you have invested in mouse that has more than just primary
          keys, you can always take advantage of the extra keys to perform some
          of the most common tasks. All you need is to go to settings and search
          for mouse shortcuts. You can also customize the shortcuts to your
          liking.
        </Text>
        <Image
          src="/mouseShortcut.png"
          alt="mouse shortcut image"
          width={700}
          height={300}
          className="mx-auto"
        />
      </Container>
    </main>
  );
};

export default Home;

const shortcuts = [
  {
      "Common Shortcuts": [
          {
              "Command-X": "Cut the selected item and copy it to the Clipboard.",
              "Command-C": "Copy the selected item to the Clipboard. This also works for files in the Finder.",
              "Command-V": "Paste the contents of the Clipboard into the current document or app. This also works for files in the Finder.",
              "Command-Z": "Undo the previous command. You can then press Command-Shift-Z to Redo, reversing the undo command. In some apps, you can undo and redo multiple commands.",
              "Command-A": "Select All items.",
              "Command-F": "Find items in a document or open a Find window.",
              "Command-G": "Find Again: Find the next occurrence of the item previously found. To find the previous occurrence, press Command-Shift-G.",
              "Command-H": "Hide the windows of the front app. To view the front app but hide all other apps, press Command-Option-H.",
              "Command-M": "Minimize the front window to the Dock. To minimize all windows of the front app, press Command-Option-M.",
              "Command-N": "New: Open an new document or window.",
              "Command-O": "Open the selected item, or open a dialog to select a file to open.",
              "Command-P": "Print the current document.",
              "Command-S": "Save the current document.",
              "Command-W": "Close the front window. To close all windows of the app, press Command-Option-W.",
              "Command-T": "Open a new tab.",
              "Option-Command-Esc": "Force quit an app.",
              "Command–Space bar": "Show or hide the Spotlight search field. To perform a Spotlight search from a Finder window, press Command–Option–Space bar. If you use multiple input sources to type in different languages, these shortcuts change input sources instead of showing Spotlight.",
              "Control–Command–Space bar": "Show the Character Viewer, from which you can choose emoji and other symbols.",
              "Control-Command-F": "Use the app in full screen, if supported by the app.",
              "Space bar": "Use Quick Look to preview the selected item.",
              "Command-Tab": "Switch between open apps.",
              "Command-Grave accent (`)": "Switch between open windows for the front app.",
              "Shift-Command-5": "In macOS Mojave or later, take a screenshot or make a screen recording. Or use Shift-Command-3 or Shift-Command-4 for screenshots. Learn more about screenshots.",
              "Shift-Command-N": "Create a new folder in the Finder.",
              "Command-Comma (,)": "Open preferences for the front app.",
          }
      ],
  },
  {
      "Finder Shortcuts": [
          {
              "Command-D": "Duplicate the selected files.",
              "Command-E": "Eject the selected disk or volume.",
              "Command-F": "Start a Spotlight search in the Finder window.",
              "Command-I": "Show the Get Info window for a selected file.",
              "Command-R": "(1) When an alias is selected in Finder: show the orginal file for the selected alias.\
              (2) In some apps, such as Calendar or Safari, refresh or reload the page. (3) In Software Update, check for software updates again",
              "Shift-Command-C": "Open the Computer window.",
              "Shift-Command-D": "Open the desktop folder.",
              "Shift-Command-F": "Open the Recents window, showing all of the files you viewed or changed recently.",
              "Shift-Command-G": "Open a Go to Folder window.",
              "Shift-Command-H": "Open the Home folder of the current macOS user account.",
              "Shift-Command-I": "Open iCloud Drive.",
              "Shift-Command-K": "Open the Network window.",
              "Option-Command-L": "Open the Downloads folder.",
              "Shift-Command-O": "Open the Documents folder.",
              "Shift-Command-P": "Show or hide the Preview pane in Finder windows.",
              "Shift-Command-R": "Open the AirDrop window.",
              "Shift-Command-T": "Show or hide the tab bar in Finder windows.",
              "Shift-Command-U": "Open the Utilities folder.",
              "Shift-Command-V": "Move: Move the files in the Clipboard from their original location to the current location.",
              "Shift-Command-Y": "View a Quick Look slideshow of the selected files.",
              "Shift-Command-Period (.)": "Show or hide hidden files.",
              "Command-1": "View the items in the Finder window as icons.",
              "Command-2": "View the items in a Finder window as a list.",
              "Command-3": "View the items in a Finder window in columns.",
              "Command-4": "View the items in a Finder window with Cover Flow.",
              "Command-Comma (,)": "Open Finder preferences.",
          }
      ],
  },
  {
      "Document shortcuts": [
          {
              "Command-B": "Boldface the selected text, or turn boldfacing on or off.",
              "Command-I": "Italicize the selected text, or turn italics on or off.",
              "Command-K": "Add a web link.",
              "Command-U": "Underline the selected text, or turn underlining on or off.",
              "Command-T": "Show or hide the Fonts window.",
              "Command-D": "Select the Desktop folder from within an Open dialog or Save dialog.",
              "Control-Command-D": "Show or hide the definition of the selected word.",
              "Shift-Command-Colon (:)": "Display the Spelling and Grammar window.",
              "Command-Semicolon (;)": "Find misspelled words in the document.",
              "Option-Delete": "Delete the word to the left of the insertion point.",
              "Control-H": "Delete the character to the left of the insertion point. Or use Delete.",
              "Control-D": "Delete the character to the right of the insertion point. Or use Fn-Delete.",
              "Fn-Delete": "Forward delete on keyboards that don't have a Forward Delete key. Or use Control-D.",
              "Control-K": "Delete the text between the insertion point and the end of the line or paragraph.",
              "Fn–Up Arrow": "Page Up: Scroll up one page. Or use Option–Up Arrow.",
              "Fn–Down Arrow": "Page Down: Scroll down one page. Or use Option–Down Arrow.",
              "Fn–Left Arrow": "Scroll to the beginning of a document. Or use Command–Up Arrow.",
              "Fn–Right Arrow": "Scroll to the end of a document. Or use Command–Down Arrow.",
              "Command–Up Arrow": "Move the insertion point to the beginning of the document. Or use Control–P.",
              "Command–Down Arrow": "Move the insertion point to the end of the document. Or use Control–N.",
              "Command–Left Arrow": "Move the insertion point to the beginning of the current line. Or use Control–A.",
              "Command–Right Arrow": "Move the insertion point to the end of the current line. Or use Control–E.",
              "Option–Left Arrow": "Move the insertion point to the beginning of the previous word. Or use Option–Control–B.",
              "Option–Right Arrow": "Move the insertion point to the end of the next word. Or use Option–Control–F.",
              "Shift–Command–Up Arrow": "Select the text between the insertion point and the beginning of the document.",
              "Shift–Command–Down Arrow": "Select the text between the insertion point and the end of the document.",
              "Shift–Command–Left Arrow": "Select the text between the insertion point and the beginning of the current line.",
              "Shift–Command–Right Arrow": "Select the text between the insertion point and the end of the current line.",
              "Shift–Up Arrow": "Extend text selection to the nearest character at the same horizontal location on the line above.",
              "Shift–Down Arrow": "Extend text selection to the nearest character at the same horizontal location on the line below.",
              "Shift–Left Arrow": "Extend text selection one character to the left.",
              "Shift–Right Arrow": "Extend text selection one character to the right.",
              "Option–Shift–Up Arrow": "Extend text selection to the beginning of the current paragraph, then to the beginning of the following paragraph if pressed again.",
              "Option–Shift–Down Arrow": "Extend text selection to the end of the current paragraph, then to the end of the following paragraph if pressed again.",
              "Option–Shift–Left Arrow": "Extend text selection to the beginning of the current word, then to the beginning of the following word if pressed again.",
              "Option–Shift–Right Arrow": "Extend text selection to the end of the current word, then to the end of the following word if pressed again.",
              "Control-A": "Move to the beginning of the line or paragraph.",
              "Control-E": "Move to the end of a line or paragraph.",
              "Control-F": "Move one character forward.",
              "Control-B": "Move one character backward.",
              "Control-L": "Center the cursor or selection in the visible area.",
              "Control-P": "Move up one line.",
              "Control-N": "Move down one line.",
              "Control-O": "Insert a new line after the insertion point.",
              "Control-T": "Swap the character behind the insertion point with the character in front of the insertion point.",
              "Command–Left Curly Bracket ({)": "Left align.",
              "Command–Right Curly Bracket (})": "Right align.",
              "Command–Vertical bar (|)": "Center align.",
              "Command–Colon (:)": "Display the Spelling and Grammar window.",
              "Option-Delete": "Delete the word to the left of the insertion point.",
              "Control-H": "Delete the character to the left of the insertion point. Or use Delete.",
              "Control-D": "Delete the character to the right of the insertion point. Or use Fn-Delete.",
              "Fn-Delete": "Forward delete on keyboards that don't have a Forward Delete key. Or use Control-D.",
              "Control-K": "Delete the text between the insertion point and the end of the line or paragraph.",
              "Shift-Command-Colon (:)": "Display the Spelling and Grammar window.",
              "Command-Semicolon (;)": "Find misspelled words in the document.",
              "Command-Comma (,)": "Open the front app’s preferences window.",
              "Command-Option-Control-Comma (,)": "Decrease the size of the selected item.",
              "Command-Option-Control-Period (.)": "Increase the size of the selected item.",
              "Shift-Command-Question Mark (?)": "Open the Help menu.",
          }
      ],
  },
  {
      "Accessibility shortcuts": [
          {
              "Command-F5": "Turn VoiceOver on or off.",
              "Option-Command-F5": "Turn VoiceOver on or off.",
              "Command-Option-F5": "Turn VoiceOver on or off.",
              "Control-Option-F8": "Invert colors.",
              "Command-Option-Control-8": "Invert colors.",
              "Control-Option-Command-8": "Invert colors.",
              "Command-Option-F": "Turn Full Keyboard Access on or off.",
              "Control-F1": "Turn Full Keyboard Access on or off.",
              "Control-F2": "Move focus to the menu bar.",
              "Control-F3": "Move focus to the Dock.",
              "Control-F4": "Move focus to the active (or next) window.",
              "Control-F5": "Move focus to the toolbar.",
              "Control-F6": "Move focus to the first (or next) panel.",
              "Control-F7": "Temporarily override the current keyboard access mode in windows and dialogs.",
              "Control-F8": "Move focus to the status menus.",
              "Command-Grave Accent (`)": "Activate the next open window in the frontmost application.",
              "Command-Shift-Grave Accent (`)": "Activate the previous open window in the frontmost application.",
              "Command-Option-Grave Accent (`)": "Move focus to the window drawer.",
              "Tab and Shift-Tab": "Move forward to the next (or previous) control in a dialog, or the next (or previous) part of a window.",
              "Control-Tab": "Move focus to the next grouping of controls in a dialog.",
              "Control-Shift-Tab": "Move focus to the previous grouping of controls.",
              "Arrow keys": "Move focus to the next (or previous) row when in the table.",
              "Control-Arrow Keys": "Move to a control adjacent to the text field",
          }
      ],
  },
]