import axios from 'axios';

export default class Client {
    public async query(blob: Blob): Promise<any> {
        const filename = new Date().toISOString() + '.wav';
        const formData = new FormData();
        formData.append('sound', blob, filename);

        const response: any = await axios({
            method: 'post',
            url: '/api/olami/query',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const asr: string = response.data.data!.asr!.result;
        const nli: string = response.data.data!.nli[0]!.desc_obj!.result;

        return {asr, nli};
    }

    public async speech(text: string): Promise<string> {
        const response: any = await axios({
            method: 'post',
            url: '/api/olami/speech',
            data: {
                text,
            },
        });

        return `${response.data.file_path}${response.data.file_name}`;
    }
}
