import { makeInstaller } from "@goose-element/utils";
import components from "./components";
import "@goose-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@goose-element/components";
export default installer;

