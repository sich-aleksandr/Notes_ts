
import { rootStore } from "../store";

import { State } from "./slice";

export const getTags = (state: rootStore): State => state.tags;

