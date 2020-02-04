const characterMock = {
  data: {
    id: "1",
    type: "characters",
    links: {
      self: "https://kitsu.io/api/edge/characters/1"
    },
    attributes: {
      createdAt: "2013-02-20T18:49:20.901Z",
      updatedAt: "2018-12-28T03:28:31.302Z",
      slug: "jet-black",
      names: {
        en: "Jet Black",
        ja_jp: "ジェット・ブラック"
      },
      canonicalName: "Jet Black",
      otherNames: ["Running Rock", "Black Dog"],
      name: "Jet Black",
      malId: 3,
      description:
        'Jet, known on his home satellite as the "Black Dog" for his tenacity, is a 36-year-old former cop from Ganymede (a Jovian satellite) and acts as Spike\'s foil during the series. Physically, Jet is very tall with a muscular build. He wears a beard with no mustache, and is completely bald save for the back of his head. Spike acts lazy and uninterested, whereas Jet is hard working and a jack-of-all-trades. Jet was once an investigator in the Inter Solar System Police (ISSP) for many years until he lost his arm in an investigation that went awry when his corrupt partner (and friend at the time) betrayed him. His arm was replaced with a cybernetic limb (later revealed to be by choice, as biological replacements were possible, he wanted the fake arm as a reminder of what happened), yet his loss of limb coupled with the general corruption of the police force prompted Jet to quit the ISSP in disgust and become a freelance bounty hunter. Jet also considers himself something of a renaissance man: he cultivates bonsai trees, cooks, enjoys jazz/blues music (he named his ship the Bebop, referring to a type of jazz), especially Charlie Parker, and even has interest in Goethe. As a character, Jet is the quintessential oyaji or "dad" even though he often wishes people would view him as a more brotherly figure (so as not to seem old).<br><br>Jet is skilled with handguns, typically carrying a pre-2004 Walther P99, as well as the use of the netgun. He is good with hand to hand combat as well. Unlike Spike, Jet tends to use more raw muscle than technique. He is also a great mechanic and pilot. Aside from the converted interplanetary fishing trawler vessel Bebop, Jet flies a smaller ship called Hammerhead. The Hammerhead appears to be a modified (Jet added larger engines and fuel tanks) salvage-craft that uses a mechanical arm equipped with a harpoon as its main weapon, which is somewhat analogous to his own mechanical arm. Both the Hammerhead and the Bebop are able to land on water, and have a fishing theme, most likely because Ganymede\'s surface is mostly covered with water (it is later revealed that the Bebop was originally a fishing ship that Jet "customized" with larger engines).<br><br>During the series, it is revealed that Jet once lived with a woman named Alisa, who left him because he was too controlling. Later they meet up again when Alisa\'s new boyfriend Rhint is wanted for murder. Jet then ends up in a situation somewhat similar to that of Vicious, where he must hunt down a woman who broke his heart, and her lover.<br><br><span class="spoiler">In a later episode, another Vicious/Spike parallel is set up when Jet finds out that it was his old partner Fad who betrayed him (though in Jet\'s case, there was no love affair involved). Fad arranged for Jet\'s death in a setup, but he survived with only a missing arm and a scar on his face. It is worth noting that Jet managed to face the demons of his past and let them go, in contrast to Spike, who was killed when he confronted his. This is likely due to the contrast in the two approaches to the past. While Spike hid and fled from his past, Jet tracked it down and confronted it.</span>',
      image: {
        original:
          "https://media.kitsu.io/characters/images/1/original.jpg?1483096805",
        meta: {
          dimensions: {}
        }
      }
    },
    relationships: {
      primaryMedia: {
        links: {
          self:
            "https://kitsu.io/api/edge/characters/1/relationships/primary-media",
          related: "https://kitsu.io/api/edge/characters/1/primary-media"
        }
      },
      castings: {
        links: {
          self: "https://kitsu.io/api/edge/characters/1/relationships/castings",
          related: "https://kitsu.io/api/edge/characters/1/castings"
        }
      },
      mediaCharacters: {
        links: {
          self:
            "https://kitsu.io/api/edge/characters/1/relationships/media-characters",
          related: "https://kitsu.io/api/edge/characters/1/media-characters"
        }
      },
      quotes: {
        links: {
          self: "https://kitsu.io/api/edge/characters/1/relationships/quotes",
          related: "https://kitsu.io/api/edge/characters/1/quotes"
        }
      }
    }
  }
};

export default characterMock;
