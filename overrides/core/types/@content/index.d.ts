declare namespace SiteContent {
    type ContentSlotResult = Record<string, ContentSlot>

    type ContentSlot = Array<SlotConfiguration>

    type SlotConfiguration = {
        available: boolean
        slot_id: string
        default: boolean
        context_type: string
        configuration_id: string
        tempalte: string
        scheduled_list: Array<string>
        callout_msg: string
        content: SlotConfigurationContent
    } & SlotConfigurationCustomAttributes

    type SlotConfigurationContent = {
        type: {
            products: boolean
            categories: boolean
            content_assets: boolean
            html: boolean
            recommendation: boolean
        }
        products_ids: Array<CommerceSDK.Product$0>
        category_ids: Array<CommerceSDK.Category>
        content_assets_ids: Array<ContentAsset>
        html: string
        recommender: unknown
    }

    type ContentAsset = {
        _type: string
        description: string
        id: string
        name: string
        c_body: string
    } & ContentAssetCustomAttributes
}
