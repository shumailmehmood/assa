export default function getUniqueStatuses(characters: any[]): string[] {
    const uniqueStatuses: string[] = [];

    characters.forEach((character) => {
        if (!uniqueStatuses.includes(character.status)) {
            uniqueStatuses.push(character.status);
        }
    });

    return uniqueStatuses;
}