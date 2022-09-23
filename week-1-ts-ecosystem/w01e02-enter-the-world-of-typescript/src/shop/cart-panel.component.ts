import { article, p } from "../framework/dom-creators";
import { cartItemSum } from "./cart-item-sum.component";
import { cartProduct } from "./cart-item.component";

import { Item } from "./types/item.types";

type CartPanelProps = {
  heading?: string;
  items: Item[];
};

export function cartPanel({
  heading = "Cart Items",
  items,
}: CartPanelProps): HTMLElement | HTMLParagraphElement | HTMLDivElement {
  const $article = article("panel is-primary my-6 w-75 mx-auto");
  const $heading = p("panel-heading");
  $heading.textContent = heading;
  $article.append($heading);
  let value = 0;
  items.forEach((item) => {
    value += item.price.value;
    $article.appendChild(cartProduct(item));
  });
  $article.append(cartItemSum({ value, currency: "PLN" }));
  return $article;
}