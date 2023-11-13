export class CreateBookDto {
    readonly _id: string;
    readonly isbn: number;
    readonly title: string;
    readonly author: string;
    readonly genre: string;
    readonly edition: string;
    readonly coverImageUrl: string;
    readonly bindingType: string;
    readonly publisher: string;
    readonly datePublished: Date;
    readonly pages: number;
    readonly listPrice: number;
    readonly listPriceCurrency: string;
    readonly quantity: number;
    readonly dateAdded: Date;
    readonly updated: Date;
}
