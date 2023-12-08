/*
    Follow the code will doing the Tree Shacking can able reducing the unused function code.
    * There are equal result in below method.
        - named import
        - namespace import
    e.g.
        - import { add } from "./treeShakingUtils";
        - import * as treeShakingUtils from "./treeShakingUtils";

    Then you can search keyword "unused harmony export" the result in dist/main.js.
    And you will the unused function codes are after the comment "unused harmony export".
    For example, in this scenario, add2 will after the "unused harmony export" in the dist/main.js.
    Like this: unused harmony export add2.
*/
import * as treeShakingUtils from "./treeShakingUtils";
// import { add } from "./treeShakingUtils";

treeShakingUtils.add(1, 2);

/*
    Follow the code won't doing the Tree Shacking.
    * There are equal result in below method.
        - default import
    e.g.
        - import nTreeShakingUtils from "./nTreeShakingUtils";
*/
import nTreeShakingUtils from "./nTreeShakingUtils";

nTreeShakingUtils._add(1, 2);
