import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import Scrcpy from "./scrcpy";
import FridaScriptRunner from "../components/frida/frida-runner";

const FridaView: NextPage = () => {
    return (
        <div
            style={{
                padding: "5px",
                height: "calc(100vh - 50px)", // Adjust for the height of the navigation bar
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "13fr 7fr", // 65% for Frida, 35% for Scrcpy
                    height: "100%",
                    gap: "10px",
                    overflow: "auto",
                }}
            >
                <div
                    style={{
                        gridColumn: "1 / 2",
                        overflow: "auto",
                    }}
                >
                    <FridaScriptRunner />
                </div>
                <div
                    style={{
                        gridColumn: "2 / 3",
                        overflow: "auto",
                        height: "100%",
                    }}
                >
                    <Scrcpy />
                </div>
            </div>
        </div>
    );
};

export default observer(FridaView);
