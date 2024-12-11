import { EyeOpenIcon, CogIcon, AsteriskIcon, HeartIcon, HomeIcon, InfoOutlineIcon, SparklesIcon, ActivityIcon, AddCircleIcon, BasketIcon, WarningOutlineIcon } from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Butikkinfo")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Info")
            .items([S.listItem().title("Bøler Synssenter").icon(EyeOpenIcon).child(S.document().schemaType("siteSettings").documentId("siteSettings"))])
        ),

      S.divider(),

      S.listItem()
        .title("Hjem")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Hjem")
            .items([S.listItem().title("Metadata").icon(InfoOutlineIcon).child(S.document().schemaType("homeMetadata").documentId("homeMetadata")), S.listItem().title("Hero").icon(AsteriskIcon).child(S.document().schemaType("hero").documentId("hero"))])
        ),

      S.listItem()
        .title("Våre tjenester")
        .icon(SparklesIcon)
        .child(
          S.list()
            .title("Våre tjenester")
            .items([S.listItem().title("Metadata").icon(InfoOutlineIcon).child(S.document().schemaType("servicesMetadata").documentId("servicesMetadata")), S.listItem().title("Innhold").icon(AddCircleIcon).child(S.document().schemaType("servicesInfo").documentId("servicesInfo")), S.listItem().title("Våre tjenester").icon(AddCircleIcon).child(S.documentTypeList("services"))])
        ),

      S.listItem()
        .title("Våre merker")
        .icon(BasketIcon)
        .child(
          S.list()
            .title("Våre merker")
            .items([S.listItem().title("Metadata").icon(InfoOutlineIcon).child(S.document().schemaType("brandsMetadata").documentId("brandsMetadata")), S.listItem().title("Merker").icon(AddCircleIcon).child(S.documentTypeList("brands"))])
        ),

      S.listItem()
        .title("Om oss")
        .icon(HeartIcon)
        .child(
          S.list()
            .title("Om oss")
            .items([S.listItem().title("Metadata").icon(InfoOutlineIcon).child(S.document().schemaType("aboutMetadata").documentId("aboutMetadata")), S.listItem().title("Innhold").icon(AddCircleIcon).child(S.document().schemaType("about").documentId("about"))])
        ),

      S.listItem()
        .title("Aktuelt")
        .icon(ActivityIcon)
        .child(
          S.list()
            .title("Aktuelt")
            .items([S.listItem().title("Metadata").icon(InfoOutlineIcon).child(S.document().schemaType("newsMetadata").documentId("newsMetadata")), S.listItem().title("Artikler").icon(AddCircleIcon).child(S.documentTypeList("article"))])
        ),

      S.listItem()
        .title("Personvern")
        .icon(WarningOutlineIcon)
        .child(
          S.list()
            .title("Personvern")
            .items([S.listItem().title("Metadata").icon(InfoOutlineIcon).child(S.document().schemaType("privacyMetadata").documentId("privacyMetadata")), S.listItem().title("Personvern").icon(WarningOutlineIcon).child(S.document().schemaType("privacy").documentId("privacy"))])
        ),

      ...S.documentTypeListItems().filter((listItem) => !["homeMetadata", "siteSettings", "servicesMetadata", "servicesInfo", "services", "brandsMetadata", "brands", "aboutMetadata", "newsMetadata", "hero", "about", "article", "privacyMetadata", "privacy"].includes(listItem.getId())),
    ]);
