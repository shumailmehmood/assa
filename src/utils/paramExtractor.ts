export default function extractLastParamFromUrl(url: string): number {
    const urlParams = new URL(url).searchParams;
    const paramsArray = Array.from(urlParams.values());

    if (paramsArray.length > 0) {
        return +paramsArray[paramsArray.length - 1];
    }
    return 1;
}
