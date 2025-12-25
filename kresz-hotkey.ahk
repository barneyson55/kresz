#Requires AutoHotkey v2.0
#SingleInstance Force

^!F10:: {
    runBat := A_ScriptDir "\run-kresz.bat"
    if !FileExist(runBat) {
        MsgBox "run-kresz.bat not found in the app folder.", "KRESZ Hotkey"
        return
    }

    Run '"' . runBat . '"', A_ScriptDir
}
