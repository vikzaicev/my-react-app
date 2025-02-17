import { Text } from "./Text/Text"
import { Controls } from "./Controls/Controls"
import "./BlockInfo.css"
import { useState } from "react"

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