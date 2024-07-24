import { EyeOpenIcon, CogIcon, StarIcon, AsteriskIcon, HeartIcon } from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Innstillinger")
        .icon(CogIcon)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Butikkinfo")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([S.listItem().title("Bøler Synssenter").icon(EyeOpenIcon).child(S.document().schemaType("siteSettings").documentId("siteSettings"))])
        ),
      S.divider(),
      S.listItem()
        .title("Nettsideinnhold")
        .icon(StarIcon)
        .child(
          S.list()
            .title("Nettsideinnhold")
            .items([S.listItem().title("Hero").icon(AsteriskIcon).child(S.document().schemaType("hero").documentId("hero")), S.listItem().title("Om oss").icon(HeartIcon).child(S.document().schemaType("about").documentId("about"))])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter((listItem) => !["siteSettings", "hero", "about"].includes(listItem.getId())),
    ]);
