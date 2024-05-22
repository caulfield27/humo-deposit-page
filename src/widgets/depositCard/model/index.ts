interface IImgDataAttributes{
    name: string,
    alternativeText: null | string,
    caption: null | string,
    width: number | string,
    height: number | string,
    formats: {
        thumbnail:{
            name:string,
            hash:string,
            ext: string,
            mime: string,
            path: null | string,
            width: number | string,
            height: number | string,
            size: number | string,
            sizeInBytes: number | string,
            url: string

        }
    },
    hash: string,
    ext: string,
    mime: string,
    size: number | string,
    url: string,
    previewUrl: null | string,
    provider: string,
    provider_metadata: null | any
    createdAt: string,
    updatedAt: string


}

interface IImgData{
    id:number,
    attributes:IImgDataAttributes,
}

interface IConditions{
    id: number,
    title: string,
    text: string
}

interface IDepositeAtributes{
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    img:IImgData[],
    conditions: IConditions
}

interface IDeposite{
    id: number
    attributes: IDepositeAtributes

}



export type {IDeposite, IDepositeAtributes, IConditions,IImgData,IImgDataAttributes}
