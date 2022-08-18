import { PhysicalItemSheetPF2e } from "@item/physical/sheet";
import { ArmorPF2e } from ".";
export declare class ArmorSheetPF2e extends PhysicalItemSheetPF2e<ArmorPF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<{
        otherTags: import("@module/sheet/helpers").SheetOptions;
        hasDetails: boolean;
        hasSidebar: boolean;
        armorPotencyRunes: {
            "1": string;
            "2": string;
            "3": string;
            "4": string;
        };
        armorResiliencyRunes: {
            resilient: string;
            greaterResilient: string;
            majorResilient: string;
        };
        armorPropertyRunes: {
            ready: string;
            slick: string;
            shadow: string;
            glamered: string;
            acidResistant: string;
            coldResistant: string;
            electricityResistant: string;
            fireResistant: string;
            greaterSlick: string;
            invisibility: string;
            sinisterKnight: string;
            greaterReady: string;
            greaterShadow: string;
            greaterInvisibility: string;
            greaterAcidResistant: string;
            greaterColdResistant: string;
            greaterElectricityResistant: string;
            greaterFireResistant: string;
            fortification: string;
            winged: string;
            rockBraced: string;
            soaring: string;
            antimagic: string;
            majorSlick: string;
            ethereal: string;
            majorShadow: string;
            greaterFortification: string;
            greaterWinged: string;
            deathless: string;
            dread: string;
            bitter: string;
            stanching: string;
            greaterStanching: string;
            majorStanching: string;
            trueStanching: string;
            implacable: string;
        };
        categories: {
            unarmored: string;
            light: string;
            medium: string;
            heavy: string;
            shield: string;
        };
        groups: {
            composite: string;
            chain: string;
            cloth: string;
            leather: string;
            plate: string;
        };
        baseTypes: {
            "explorers-clothing": string;
            "padded-armor": string;
            "leather-armor": string;
            "studded-leather-armor": string;
            "chain-shirt": string;
            "hide-armor": string;
            "scale-mail": string;
            "chain-mail": string;
            breastplate: string;
            "splint-mail": string;
            "half-plate": string;
            "full-plate": string;
            "hellknight-plate": string;
        };
        bulkTypes: {
            L: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
            21: string;
            22: string;
            23: string;
            24: string;
            25: string;
            26: string;
            27: string;
            28: string;
            29: string;
            30: string;
            31: string;
            32: string;
            33: string;
            34: string;
            35: string;
            36: string;
            37: string;
            38: string;
            39: string;
            40: string;
            41: string;
            42: string;
            43: string;
            44: string;
            45: string;
            46: string;
            47: string;
            48: string;
            49: string;
            50: string;
        };
        preciousMaterials: Record<"adamantine" | "darkwood" | "mithral" | "orichalcum" | "silver" | "warpglass" | "abysium" | "coldIron" | "djezet" | "dragonhide" | "grisantian-pelt" | "inubrix" | "noqual" | "peachwood" | "siccatite" | "sovereignSteel", string>;
        preciousMaterialGrades: Record<"high" | "low" | "standard", string>;
        isPhysical: true;
        basePriceString: string;
        priceString: string;
        actionTypes: {
            action: string;
            reaction: string;
            free: string;
            passive: string;
        };
        actionsNumber: {
            1: string;
            2: string;
            3: string;
        };
        frequencies: {
            PT1M: string;
            PT10M: string;
            PT1H: string;
            PT24H: string;
            day: string;
            P1W: string;
        };
        sizes: Record<"med" | "tiny" | "sm" | "lg" | "huge" | "grg", string>;
        stackGroups: {
            arrows: string;
            bolts: string;
            slingBullets: string;
            blowgunDarts: string;
            woodenTaws: string;
            rounds5: string;
            rounds10: string;
            rations: string;
            coins: string;
            gems: string;
            sacks: string;
        };
        usage: {
            "affixed-to-a-ranged-weapon": string;
            "affixed-to-a-shield": string;
            "affixed-to-a-two-handed-firearm-or-crossbow": string;
            "affixed-to-armor": string;
            "affixed-to-medium-heavy-armor": string;
            "affixed-to-armor-or-a-weapon": string;
            "affixed-to-armor-or-travelers-clothing": string;
            "affixed-to-crossbow-or-firearm": string;
            "affixed-to-firearm": string;
            "affixed-to-firearm-with-a-reload-of-1": string;
            "affixed-to-firearm-with-the-kickback-trait": string;
            "affixed-to-headgear": string;
            "affixed-to-weapon": string;
            "applied-to-a-wind-powered-vehicle": string;
            "applied-to-any-item-of-light-or-negligible-bulk": string;
            "applied-to-any-visible-article-of-clothing": string;
            "applied-to-belt-cape-cloak-or-scarf": string;
            "applied-to-boots-cape-cloak-or-umbrella": string;
            "applied-to-dueling-cape-or-shield": string;
            "applied-to-buckler-shield": string;
            "applied-to-shield": string;
            "attached-to-a-thrown-weapon": string;
            "attached-to-crossbow-or-firearm": string;
            "attached-to-crossbow-or-firearm-firing-mechanism": string;
            "attached-to-crossbow-or-firearm-scope": string;
            "attached-to-firearm": string;
            "attached-to-firearm-scope": string;
            bonded: string;
            "each-rune-applied-to-a-separate-item-that-has-pockets": string;
            "etched-onto-a-weapon": string;
            "etched-onto-armor": string;
            "etched-onto-clan-dagger": string;
            "etched-onto-lm-nonmetal-armor": string;
            "etched-onto-med-heavy-armor": string;
            "etched-onto-melee-weapon": string;
            "etched-onto-thrown-weapon": string;
            "held-in-one-hand": string;
            "held-in-two-hands": string;
            other: string;
            "sewn-into-clothing": string;
            "tattooed-on-the-body": string;
            worn: string;
            wornamulet: string;
            wornanklets: string;
            wornarmbands: string;
            wornbackpack: string;
            wornbarding: string;
            wornbelt: string;
            wornbeltpouch: string;
            wornbracelet: string;
            wornbracers: string;
            worncirclet: string;
            worncloak: string;
            wornclothing: string;
            worncollar: string;
            worncrown: string;
            wornepaulet: string;
            worneyepiece: string;
            worngarment: string;
            worngloves: string;
            wornheadwear: string;
            wornhorseshoes: string;
            wornmask: string;
            wornnecklace: string;
            wornonbelt: string;
            wornring: string;
            wornsaddle: string;
            wornshoes: string;
            wornwrist: string;
            "worn-and-attached-to-two-weapons": string;
            "worn-under-armor": string;
        };
        bulkDisabled: boolean;
        activations: {
            action: import("../physical/data").ItemActivation;
            id: string;
            base: string;
        }[];
        itemType: string | null;
        showTraits: boolean;
        sidebarTemplate?: (() => string) | undefined;
        detailsTemplate?: (() => string) | undefined;
        item: import("./data").ArmorData;
        data: import("./data").ArmorSystemData;
        enrichedContent: Record<string, string>;
        user: {
            isGM: boolean;
        };
        enabledRulesUI: boolean;
        ruleEditing: boolean;
        rarity: "unique" | "common" | "uncommon" | "rare" | null;
        rarities: {
            common: string;
            uncommon: string;
            rare: string;
            unique: string;
        };
        traits: import("@module/sheet/helpers").SheetOptions | null;
        ruleLabels: {
            label: string;
            recognized: boolean;
        }[];
        ruleSelection: {
            selected: string | null;
            types: Record<string, string>;
        };
        ruleElements: {
            template: string;
            index: number;
            rule: import("../../rules/rule-element/data").RuleElementSource;
        }[];
        proficiencies: readonly ["PF2E.ProficiencyLevel0", "PF2E.ProficiencyLevel1", "PF2E.ProficiencyLevel2", "PF2E.ProficiencyLevel3", "PF2E.ProficiencyLevel4"];
        cssClass: string;
        editable: boolean;
        document: ArmorPF2e;
        limited: boolean;
        options: FormApplicationOptions;
        owner: boolean;
        title: string;
    }>;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
