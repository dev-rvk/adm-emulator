import { registerIcons } from "@fluentui/react";
import {
    AddCircleRegular,
    WindowDevToolsRegular,
    ArrowClockwiseRegular,
    ArrowRotateClockwiseRegular,
    ArrowRotateCounterclockwiseRegular,
    ArrowSortDownRegular,
    ArrowSortUpRegular,
    BookSearchRegular,
    BookmarkRegular,
    BoxRegular,
    BugRegular,
    CameraRegular,
    CheckmarkRegular,
    ChevronDownRegular,
    ChevronRightRegular,
    ChevronLeftRegular,
    ChevronUpRegular,
    CircleRegular,
    CloudArrowDownRegular,
    CloudArrowUpRegular,
    CopyRegular,
    DeleteRegular,
    DocumentRegular,
    FilterRegular,
    FolderRegular,
    FullScreenMaximizeRegular,
    InfoRegular,
    LightbulbFilamentRegular,
    LightbulbRegular,
    MoreHorizontalRegular,
    NavigationRegular,
    OrientationRegular,
    PanelBottomRegular,
    PersonFeedbackRegular,
    PhoneLaptopRegular,
    PhoneRegular,
    PhoneSpeakerRegular,
    PlayRegular,
    PlugConnectedRegular,
    PlugDisconnectedRegular,
    PowerRegular,
    RecordRegular,
    SaveRegular,
    SearchRegular,
    SettingsRegular,
    Speaker1Regular,
    Speaker2Regular,
    SpeakerOffRegular,
    StopRegular,
    TextGrammarErrorRegular,
    TextGrammarSettingsRegular,
    WandRegular,
    WarningRegular,
    WifiSettingsRegular,
    WindowConsoleRegular,
    ChevronLeft12Regular,
    BugFilled,
} from "@fluentui/react-icons";

const STYLE = {};

export function register() {
    registerIcons({
        icons: {
            // General use
            AddCircle: <AddCircleRegular style={STYLE} />,
            ArrowClockwise: <ArrowClockwiseRegular style={STYLE} />,
            Bookmark: <BookmarkRegular style={STYLE} />,
            BookSearch: <BookSearchRegular style={STYLE} />,
            Box: <BoxRegular style={STYLE} />,
            Bug: <BugRegular style={STYLE} />,
            Camera: <CameraRegular style={STYLE} />,
            ChevronDown: <ChevronDownRegular style={STYLE} />,
            ChevronLeft: <ChevronLeftRegular style={STYLE} />,
            ChevronRight: <ChevronRightRegular style={STYLE} />,
            ChevronUp: <ChevronUpRegular style={STYLE} />,
            Circle: <CircleRegular style={STYLE} />,
            Copy: <CopyRegular style={STYLE} />,
            CloudArrowUp: <CloudArrowUpRegular style={STYLE} />,
            CloudArrowDown: <CloudArrowDownRegular style={STYLE} />,
            Delete: <DeleteRegular style={STYLE} />,
            Document: <DocumentRegular style={STYLE} />,
            Folder: <FolderRegular style={STYLE} />,
            FullScreenMaximize: <FullScreenMaximizeRegular style={STYLE} />,
            Info: <InfoRegular style={STYLE} />,
            Lightbulb: <LightbulbRegular style={STYLE} />,
            LightbulbFilament: <LightbulbFilamentRegular style={STYLE} />,
            Navigation: <NavigationRegular style={STYLE} />,
            Orientation: <OrientationRegular style={STYLE} />,
            PanelBottom: <PanelBottomRegular style={STYLE} />,
            PersonFeedback: <PersonFeedbackRegular style={STYLE} />,
            Phone: <PhoneRegular style={STYLE} />,
            PhoneLaptop: <PhoneLaptopRegular style={STYLE} />,
            PhoneSpeaker: <PhoneSpeakerRegular style={STYLE} />,
            Play: <PlayRegular style={STYLE} />,
            PlugConnected: <PlugConnectedRegular style={STYLE} />,
            PlugDisconnected: <PlugDisconnectedRegular style={STYLE} />,
            Power: <PowerRegular style={STYLE} />,
            Record: <RecordRegular style={STYLE} />,
            RotateLeft: <ArrowRotateCounterclockwiseRegular style={STYLE} />,
            RotateRight: <ArrowRotateClockwiseRegular style={STYLE} />,
            Save: <SaveRegular style={STYLE} />,
            Settings: <SettingsRegular style={STYLE} />,
            Speaker1: <Speaker1Regular style={STYLE} />,
            Speaker2: <Speaker2Regular style={STYLE} />,
            SpeakerOff: <SpeakerOffRegular style={STYLE} />,
            Stop: <StopRegular style={STYLE} />,
            TextGrammarError: <TextGrammarErrorRegular style={STYLE} />,
            TextGrammarSettings: <TextGrammarSettingsRegular style={STYLE} />,
            Wand: <WandRegular style={STYLE} />,
            Warning: <WarningRegular style={STYLE} />,
            WifiSettings: <WifiSettingsRegular style={STYLE} />,
            WindowConsole: <WindowConsoleRegular style={STYLE} />,
            WindowDevTools: <WindowDevToolsRegular style={STYLE} />,

            // Required by @fluentui/react
            Checkmark: <CheckmarkRegular style={STYLE} />,
            StatusCircleCheckmark: <CheckmarkRegular style={STYLE} />,
            ChevronUpSmall: <ChevronUpRegular style={STYLE} />,
            ChevronDownSmall: <ChevronDownRegular style={STYLE} />,
            CircleRing: <CircleRegular style={STYLE} />,
            More: <MoreHorizontalRegular />,
            SortUp: <ArrowSortUpRegular style={STYLE} />,
            SortDown: <ArrowSortDownRegular style={STYLE} />,
            Search: <SearchRegular style={STYLE} />,
            Filter: <FilterRegular style={STYLE} />,

            // Required by file manager page
            Document20: (
                <DocumentRegular
                    style={{ fontSize: 20, verticalAlign: "middle" }}
                />
            ),
            PhoneCheckmarkRegular: (
                <PhoneRegular
                    style={{ fontSize: 24, verticalAlign: "middle" }}
                />
            ),
            DevMode: <WindowDevToolsRegular style={STYLE} />,

            Frida: <BugFilled style={STYLE} />,
        },
    });
}

const Icons = {
    AddCircle: "AddCircle",
    ArrowClockwise: "ArrowClockwise",
    Bookmark: "Bookmark",
    BookSearch: "BookSearch",
    Box: "Box",
    Bug: "Bug",
    Camera: "Camera",
    Copy: "Copy",
    Circle: "Circle",
    ChevronDown: "ChevronDown",
    ChevronRight: "ChevronRight",
    ChevronLeft: "ChevronLeft",
    ChevronUp: "ChevronUp",
    CloudArrowUp: "CloudArrowUp",
    CloudArrowDown: "CloudArrowDown",
    Delete: "Delete",
    Document: "Document",
    Folder: "Folder",
    FullScreenMaximize: "FullScreenMaximize",
    Lightbulb: "Lightbulb",
    LightbulbFilament: "LightbulbFilament",
    Info: "Info",
    Navigation: "Navigation",
    Orientation: "Orientation",
    PanelBottom: "PanelBottom",
    PersonFeedback: "PersonFeedback",
    Phone: "Phone",
    PhoneLaptop: "PhoneLaptop",
    PhoneSpeaker: "PhoneSpeaker",
    Play: "Play",
    PlugConnected: "PlugConnected",
    PlugDisconnected: "PlugDisconnected",
    Power: "Power",
    Record: "Record",
    RotateLeft: "RotateLeft",
    RotateRight: "RotateRight",
    Save: "Save",
    Settings: "Settings",
    Speaker1: "Speaker1",
    Speaker2: "Speaker2",
    SpeakerOff: "SpeakerOff",
    Stop: "Stop",
    TextGrammarError: "TextGrammarError",
    TextGrammarSettings: "TextGrammarSettings",
    Wand: "Wand",
    Warning: "Warning",
    WifiSettings: "WifiSettings",
    WindowConsole: "WindowConsole",
    WindowDevTools: "WindowDevTools",
    DevMode: "DevMode",
    Document20: "Document20",
    PhoneCheckmarkRegular: "PhoneCheckmarkRegular",
    Frida: "Frida",
};

export default Icons;
