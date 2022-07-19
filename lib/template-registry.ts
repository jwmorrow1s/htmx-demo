import { promises as fs } from 'fs';
import { Config } from "../config";
import { TemplateFetcher, TemplateRegistrar, TemplateRenderer, TemplateRenderFn, TemplateRenderFnGetter } from "./types";

interface ITemplateRegistry {
    register: TemplateRegistrar;
    fetch: TemplateFetcher;
    render: TemplateRenderer;
}
class TemplateRegistry implements ITemplateRegistry {
    constructor() { }
    private TEMPLATES: { [templateName: string]: TemplateRenderFn<any> } = {};
    public register<T>(templateName: string, renderFn: TemplateRenderFn<T>) {
        this.TEMPLATES[templateName] = renderFn;
    }
    public fetch: TemplateFetcher = async (name: string) => {
        return await fs.readFile(`${Config.PROJECT_ROOT}/templates/${name}.html`, 'utf-8');
    }
    private getRender<T>(name: string) {
        const renderFn: TemplateRenderFn<T> | undefined = this.TEMPLATES[name];
        if (typeof renderFn === 'function') {
            return renderFn;
        } else {
            throw Error(`No Template found for name "${name}". Available Templates are ${JSON.stringify(Object.keys(this.TEMPLATES))}`);
        }
    };

    public async render<T>(templateName: string, data: T) {
        return await templateRegistry.getRender<T>(templateName)(data);
    }
};

export const templateRegistry = new TemplateRegistry();