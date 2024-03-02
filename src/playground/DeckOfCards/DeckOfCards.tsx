import useSWR from "swr";
import { fetcher } from "./api";
import type { Card } from "./types";

export function DeckOfCards() {
  const { data: deckData } = useSWR(
    `/api/deck/new/shuffle/?deck_count=1`,
    fetcher
  );
  const {
    data: cardsData,
    error: cardsError,
    mutate: mutateCards,
  } = useSWR(() => `/api/deck/${deckData.deck_id}/draw/?count=7`, fetcher);

  const handleDraw = async () => {
    // Draw a new card
    const response = await fetcher(
      `/api/deck/${deckData.deck_id}/draw/?count=1`
    );
    const drawnCard = response.cards[0];

    // Add the new card to cardsData.cards
    mutateCards(
      {
        ...cardsData,
        cards: [...cardsData.cards, drawnCard],
        remaining: response.remaining,
      },
      { revalidate: false }
    );
  };

  const handleDiscard = (code: string) => {
    const filteredCards = cardsData.cards.filter(
      (card: Card) => card.code !== code
    );

    mutateCards(
      {
        ...cardsData,
        cards: filteredCards,
      },
      { revalidate: false }
    );
  };

  if (!cardsData) return <div>Loading cards...</div>;
  if (cardsError) return <div>Error loading cards: {cardsError}</div>;

  return (
    <div>
      <div>
        <button onClick={handleDraw} disabled={cardsData.remaining <= 0}>
          Draw another card
        </button>
      </div>
      {cardsData.cards.map((card: Card) => (
        <span key={card.code}>
          <button onClick={() => handleDiscard(card.code)}>
            <img alt={`${card.value} of ${card.suit}`} src={card.image} />
          </button>
        </span>
      ))}
    </div>
  );
}
