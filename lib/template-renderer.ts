import axios from 'axios';
import { render } from 'mustache';
import { Config } from '../config';
import type { TemplateFetcher, TemplateRenderer } from './types';


const BASE_URL = `http://localhost:${Config.PORT}/templates` 

const fetchTemplate: TemplateFetcher = async (name) => {
    try {
        const { data: template } = await axios.get(`${BASE_URL}/${name}.html`, { headers: {'Content-Type': 'text/html'} });
        return template;
    } catch (err: any) {
        if('message' in err){
            console.error(err.message);
        }
        // TODO: error templating?
        return 'error';
    }
}

export const renderTemplate: TemplateRenderer = async (templateName, data) => {
    const template = await fetchTemplate(templateName);
    return render(template, data);
};