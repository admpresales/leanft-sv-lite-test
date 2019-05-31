import * as sv from "sv-vsl";

import {CategoriesModel} from "./CategoriesModel.js";

export class AOSCategoriesApplicationModel extends sv.ApplicationModel {

    constructor(smCategoriesModel: CategoriesModel) {
        super();
        this.smCategoriesModel = smCategoriesModel;
    }

    @sv.applicationScenario
    AOSCategories() {
        sv.forkScenario(() => this.smCategoriesModel.AOSCategories_Categories());
    }

}