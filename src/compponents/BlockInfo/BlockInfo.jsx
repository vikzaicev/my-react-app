import { Text } from "./Text/Text"
import { Controls } from "./Controls/Controls"
import "./BlockInfo.css"

export function BlockInfo() {
    return (
        <div className="block">
            <Text>Meet our speaker</Text>
            <div className="vector">
                <Controls direction="left" />
                <Controls direction="right" disabled />
            </div>
        </div>
    )
}