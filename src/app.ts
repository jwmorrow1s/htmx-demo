import { render } from "mustache";
import { templateRegistry } from "../lib/template-registry";
import { PeopleTemplateProps } from "./types";

export const inititializeTemplates = () => {
    templateRegistry.register('people', async (props: PeopleTemplateProps) => {
        const template = await templateRegistry.fetch('people');
        return render(template, props);
    });
}

// TODOs
//   * add animation on fetch people 
//   * flesh out edit functionality 
//   * add hyperscript to edit nearby div
//   * add add person functionality 
//   * add delete person functionality 