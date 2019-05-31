import * as sv from "sv-vsl";


export class CategoriesInterface extends sv.RestServiceInterface {

    constructor() {
        super();
        this.importExternal("./CategoriesInterfaceSwagger.json");
    }

}