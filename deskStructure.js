import { EyeOpenIcon, CogIcon, StarIcon } from "@sanity/icons";

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
            .title("Hero")
            .items([S.listItem().title("Hero").icon(StarIcon).child(S.document().schemaType("hero").documentId("hero"))])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter((listItem) => !["siteSettings", "hero"].includes(listItem.getId())),
    ]);
