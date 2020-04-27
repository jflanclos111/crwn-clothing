import React, { useState } from "react";
import { SHOP_DATA } from "./shop.data";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

export function ShopPage() {
  const [state, setState] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {state.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}
