import { Atoms } from "../../constants";
import { atom } from "recoil";

const editorState = atom({
    key: Atoms.isEditor,
    default: false,
});

export default editorState;
