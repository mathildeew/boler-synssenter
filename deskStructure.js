// ./deskStructure.js
import { EyeOpenIcon, CogIcon } from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem().title("Butikkinfo").icon(EyeOpenIcon).child(S.document().schemaType("siteSettings").documentId("siteSettings")),
              //  S.listItem().title("Site Colors").child(S.document().schemaType("colors").documentId("colors")), S.listItem().title("Main Navigation").child(S.document().schemaType("navigation").documentId("navigation"))
            ])
        ),
      S.divider(),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter((listItem) => !["siteSettings", "colors", "navigation"].includes(listItem.getId())),
    ]);
