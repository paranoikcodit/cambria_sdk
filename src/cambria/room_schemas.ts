import * as z$6 from "zod";
import { ClientMessage, ActionName, ClientRequest } from "./messages";
import type { Bot } from "./bot";

export enum HerbType {
	Harranhal = "harranhal",
	Morellum = "morellum",
	Phoenix = "phoenix",
}

export enum FiberHerbType {
	FLAX = "flax",
	GRANUM = "granum",
	SILVERTHORN = "silverthorn",
}

const SpecialItem = {
	Excalibur: "excalibur",
	FounderBaton: "founder_baton",
	AgilityTicket: "agility_ticket",
	AgilityRewardPass: "agility_reward_pass",
};
const TorchItem = {
	Small: "torch_small",
	Medium: "torch_medium",
	Big: "torch_big",
};
export const SwordItem = {
	Bronze: "bronze_sword",
	Silver: "silver_sword",
	Steel: "steel_sword",
	Iron: "iron_sword",
	Adamantine: "adamantine_sword",
	Dragonsteel: "dragonsteel_sword",
};
const ShortswordItem = {
	Heirloom: "heirloom_shortsword",
};
const ArenaDaggerItem = {
	Dragonsteel: "dragonsteel_dagger",
	Poisoned: "poisoned_dagger",
};
const ArenaFalchionItem = {
	Dragonsteel: "dragonsteel_falchion",
};
const DaggerItem = {
	Bronze: "bronze_dagger",
	Iron: "iron_dagger",
	Steel: "steel_dagger",
	Adamantine: "adamantine_dagger",
	Dragonsteel: "dragonsteel_dagger_goldrush",
};
const PoisonedDaggerItem = {
	SteelP: "steel_dagger_p",
	SteelPP: "steel_dagger_pp",
	SteelPPP: "steel_dagger_ppp",
	AdamantineP: "adamantine_dagger_p",
	AdamantinePP: "adamantine_dagger_pp",
	AdamantinePPP: "adamantine_dagger_ppp",
	DragonsteelP: "dragonsteel_dagger_goldrush_p",
	DragonsteelPP: "dragonsteel_dagger_goldrush_pp",
	DragonsteelPPP: "dragonsteel_dagger_goldrush_ppp",
};
const JavelinItem = {
	Steel: "steel_javelin",
};
const PoisonedJavelinItem = {
	SteelP: "steel_javelin_p",
	SteelPP: "steel_javelin_pp",
	SteelPPP: "steel_javelin_ppp",
};
const CrossbowItem = {
	Crossbow: "crossbow",
	EnhancedCrossbow: "enhanced_crossbow",
};
const RepeaterItem = {
	CultistsRepeater: "cultists_repeater",
};
const HandCannonItem = {
	HandCannon: "hand_cannon",
};
const ShroomShakerItem = {
	Standard: "shroom_shaker",
};
const LongbowItem = {
	Longbow: "longbow",
	OakLongbow: "oaklongbow",
	MystbarkLongbow: "mystbarklongbow",
	CompositeLongbow: "compositelongbow",
	Mageslayer: "mageslayerbow",
	Felfire: "felfirebow",
};
const ShortbowItem = {
	Shortbow: "shortbow",
	OakShortbow: "oakshortbow",
	MystbarkShortbow: "mystbarkshortbow",
};
const MaulItem = {
	Stone: "stone_maul",
};
const AxeItem = {
	Standard: "great_axe",
	Golden: "golden_great_axe",
	Mistletoe: "mistletoe_great_axe",
	GiantToyHammer: "giant_toyhammer",
};
const BattleAxeItem = {
	Iron: "iron_battle_axe",
	Steel: "steel_battle_axe",
	Adamantine: "adamantine_battle_axe",
	AdamantineMasterwork: "adamantine_battle_axe_masterwork",
};
const ChainWhipItem = {
	Iron: "iron_chain_whip",
	Steel: "steel_chain_whip",
	Adamantine: "adamantine_chain_whip",
	AdamantineMasterwork: "adamantine_chain_whip_masterwork",
};
const FalchionItem = {
	Iron: "iron_falchion",
	Steel: "steel_falchion",
	Adamantine: "adamantine_falchion",
	AdamantineMasterwork: "adamantine_falchion_masterwork",
};
const PoisonedFalchionItem = {
	SteelP: "steel_falchion_p",
	SteelPP: "steel_falchion_pp",
	SteelPPP: "steel_falchion_ppp",
	AdamantineP: "adamantine_falchion_p",
	AdamantinePP: "adamantine_falchion_pp",
	AdamantinePPP: "adamantine_falchion_ppp",
	AdamantineMasterworkP: "adamantine_falchion_masterwork_p",
	AdamantineMasterworkPP: "adamantine_falchion_masterwork_pp",
	AdamantineMasterworkPPP: "adamantine_falchion_masterwork_ppp",
};
const GreatswordItem = {
	Iron: "iron_greatsword",
	Steel: "steel_greatsword",
	Adamantine: "adamantine_greatsword",
	AdamantineMasterwork: "adamantine_greatsword_masterwork",
};
const WhipItem = {
	Bloodroot: "bloodroot_whip",
	Golden: "golden_whip",
	CandyCane: "candycane_whip",
};
export const StaffItem = {
	Standard: "staff",
	Corrupted: "corrupted_staff",
	Mystic: "mystic_staff",
};
const SpearItem = {
	Iron: "iron_spear",
	Steel: "steel_spear",
	Adamantine: "adamantine_spear",
	AdamantineMasterwork: "adamantine_spear_masterwork",
};
const WarClubItem = {
	Bronze: "bronze_warclub",
	Iron: "iron_warclub",
	Steel: "steel_warclub",
	Adamantine: "adamantine_warclub",
	AdamantineMasterwork: "adamantine_warclub_masterwork",
};
const JoltbladeItem = {
	Megatur: "megatur_joltblade",
};
const BatteringClubItem = {
	Standard: "batteringclub",
	Spiked: "spiked_batteringclub",
};
const DefenderItem = {
	Bronze: "bronze_defender",
	Iron: "iron_defender",
	Steel: "steel_defender",
	Adamantine: "adamantine_defender",
	Dragonsteel: "dragonsteel_defender",
};
const KiteShieldItem = {
	Bronze: "bronze_kiteshield",
	Iron: "iron_kiteshield",
	Steel: "steel_kiteshield",
	Adamantine: "adamantine_kiteshield",
	Wicket: "wicket_kiteshield",
};
const BookItem = {
	MagesBook: "mages_book",
};
const NullItem = {
	Null: "null",
};
const TrapItem = {
	Poison: "poison_trap",
	TreeSpring: "tree_spring_trap",
	Pit: "pit_trap",
};
const ObjectItem = {
	Barricade: "barricade_item",
	Cannon: "cannon_item",
	Campfire: "campfire_item",
};
const CannonballItem = {
	T1: "cannonball_t1",
	T2: "cannonball_t2",
};
export const RawFishItem = {
	Trout: "raw_trout",
	Cod: "raw_cod",
	Carp: "raw_carp",
	Lobster: "raw_lobster",
	Eel: "raw_eel",
	Rockfish: "raw_rockfish",
};
export const GrilledFishItem = {
	Trout: "grilled_trout",
	Cod: "grilled_cod",
	Carp: "grilled_carp",
	Lobster: "grilled_lobster",
	Eel: "grilled_eel",
	Rockfish: "grilled_rockfish",
};
export const MealItem = {
	SnailSaltSoup: "snail_salt_soup",
	NagasBlessing: "nagas_blessing",
	AnchovySoup: "anchovy_soup",
	SeaweedSoup: "seaweed_soup",
	HeartyStew: "hearty_stew",
	MushroomPie: "mushroom_pie",
	CodChunks: "cod_chunks",
	RabbitPie: "rabbit_pie",
	HoneyCake: "honey_cake",
	TunaFishPie: "tuna_fish_pie",
	DragonfruitPie: "dragonfruit_pie",
	KingsLobsterDelight: "kings_lobster_delight",
	BeefStew: "beef_stew",
	VenisonStew: "venison_stew",
	BoarStew: "boar_stew",
	BearStew: "bear_stew",
	GrilledTrout: "grilled_trout",
	GrilledCod: "grilled_cod",
	GrilledCarp: "grilled_carp",
	GrilledLobster: "grilled_lobster",
	GrilledEel: "grilled_eel",
	GrilledRockfish: "grilled_rockfish",
	FishSauce: "fish_sauce",
	Bread: "bread",
};
const MagicChargeItem = {
	UnstableOrb: "unstable_orb",
	Fire: "fire_charge",
	Frost: "frost_charge",
	Wind: "wind_charge",
	Earth: "earth_charge",
	Void: "void_charge",
	Bone: "bone_charge",
};
const BoltItem = {
	Bronze: "crossbow_charge_bronze",
	Iron: "crossbow_charge_iron",
	Steel: "crossbow_charge_steel",
	Adamantine: "crossbow_charge_adamantine",
	Dragonsteel: "crossbow_charge_dragonsteel",
};
const EnchantedBoltItem = {
	DragonsteelE: "crossbow_charge_dragonsteel_e",
	DragonsteelI: "crossbow_charge_dragonsteel_i",
};
const PoisonedBoltItem = {
	SteelP: "crossbow_charge_steel_p",
	SteelPP: "crossbow_charge_steel_pp",
	SteelPPP: "crossbow_charge_steel_ppp",
	AdamantineP: "crossbow_charge_adamantine_p",
	AdamantinePP: "crossbow_charge_adamantine_pp",
	AdamantinePPP: "crossbow_charge_adamantine_ppp",
};
const ArrowItem = {
	Bronze: "bronze_arrow",
	Iron: "iron_arrow",
	Steel: "steel_arrow",
	Adamantine: "adamantine_arrow",
};
const ShroomChargeItem = {
	Red: "shroom_charge_red",
	Yellow: "shroom_charge_yellow",
	Black: "shroom_charge_black",
};
const PoisonedArrowItem = {
	SteelP: "steel_arrow_p",
	SteelPP: "steel_arrow_pp",
	SteelPPP: "steel_arrow_ppp",
	AdamantineP: "adamantine_arrow_p",
	AdamantinePP: "adamantine_arrow_pp",
	AdamantinePPP: "adamantine_arrow_ppp",
};
const ShotItem = {
	HandCannonShot: "hand_cannon_shot",
};
const OreItem = {
	Copper: "copper_ore",
	Tin: "tin_ore",
	Iron: "iron_ore",
	Coal: "coal_ore",
	Adamantine: "adamantine_ore",
	Obsidian: "obsidian_ore",
	Luminescent: "luminescent_ore",
};
const BarItem = {
	Bronze: "bronze_bar",
	Iron: "iron_bar",
	Steel: "steel_bar",
	Adamantine: "adamantine_bar",
	Obsidian: "obsidian_bar",
};
const ShardItem = {
	Bronze: "bronze_shard",
	Steel: "steel_shard",
	Iron: "iron_shard",
	Adamantine: "adamantine_shard",
	AdamantineMasterwork: "adamantine_shard_masterwork",
};
const MaterialItem = {
	EmptyVial: "empty_vial",
	Log: "log",
	OakLog: "oak_logs",
	MystbarkLog: "mystbark_log",
	Plank: "plank",
	Thread: "thread",
	MyrtleSeed: "myrtle_seed",
	Salt: "salt",
	SnailsShell: "snails_shell",
	SpiderEggs: "spider_eggs",
	Dragonhide: "dragonhide",
	Bones: "bones",
	BigBones: "big_bones",
	BloodyFinger: "bloody_finger",
	MothWing: "moth_wing",
	MushroomCap: "mushroom_cap",
	TreeSap: "tree_sap",
	EarthWorm: "earthworm",
	VampireFang: "vampire_fang",
	AngelDust: "angel_dust",
	ZombieBrain: "zombie_brain",
	FishBait: "fish_bait",
	Ashes: "ashes",
	RatEar: "rats_ear",
	RatClaw: "rats_claw",
	RatTail: "rats_tail",
	GleamingCotton: "gleaming_cotton",
	VerdantFlax: "verdant_flax",
	AzureCoir: "azure_coir",
	ElderHemp: "elder_hemp",
	Gleamcloth: "gleam_cloth",
	Verdantcloth: "verdant_cloth",
	Azurecloth: "azure_cloth",
	Eldercloth: "elder_cloth",
	CowMeat: "cow_meat",
	DeerMeat: "deer_meat",
	BoarMeat: "boar_meat",
	BearMeat: "bear_meat",
	CowHide: "cow_hide",
	DeerHide: "deer_hide",
	BoarHide: "boar_hide",
	BearHide: "bear_hide",
	CowLeather: "cow_leather",
	DeerLeather: "deer_leather",
	BoarLeather: "boar_leather",
	BearLeather: "bear_leather",
	RockDust: "rock_dust",
	StoneShard: "stone_shard",
	EnchantedStoneShard: "enchanted_stone_shard",
	WeaponPoisonT1: "weapon_poison_t1",
	WeaponPoisonT2: "weapon_poison_t2",
	WeaponPoisonT3: "weapon_poison_t3",
	BloodstainedSilver: "bloodstained_silver",
};
export const CurrencyItem = {
	Gold: "gold",
	ArenaToken: "arena_token",
};
const GemstoneItem = {
	Ruby: "ruby_gemstone",
	Sapphire: "sapphire_gemstone",
	Emerald: "emerald_gemstone",
	Diamond: "diamond_gemstone",
	Slayer: "slayer_gemstone",
};
const NailItem = {
	Bronze: "bronze_nail",
};
const DrugItem = {
	CocaLeaves: "coca_leaves",
};
const PotionItem = {
	WeakRage: "weak_rage_potion",
	Rage: "rage_potion",
	SuperRage: "super_rage_potion",
	WeakFarsight: "weak_farsight_potion",
	Farsight: "farsight_potion",
	SuperFarsight: "super_farsight_potion",
	Antifire: "antifire_potion",
	RestorationBrew: "restoration_brew",
	WeakSorcerersBrew: "weak_sorcerers_brew",
	SorcerersBrew: "sorcerers_brew",
	SuperSorcerersBrew: "super_sorcerers_brew",
	Beer: "beer",
	WeakRunEnergy: "weak_runenergy_potion",
	RunEnergy: "runenergy_potion",
	SuperRunEnergy: "super_runenergy_potion",
	WeakDefence: "weak_defence_potion",
	Defence: "defence_potion",
	SuperDefence: "super_defence_potion",
	Antipoison: "antipoison_potion",
	Prayer: "prayer_potion",
	CleansingBalm: "cleansing_balm",
};

const MeleeHelmItem = {
	Bronze: "elitemeleebronze_helm",
	Iron: "elitemeleeiron_helm",
	Steel: "elitemeleesteel_helm",
	Adamantine: "elitemeleeadamantine_helm",
	Dragonsteel: "dragonsteelhelm",
	GoldObsidian: "goldobsidian_helm",
	Obsidian: "obsidian_helm",
	BlackObsidian: "blackobsidian_helm",
	EliteCrownlands: "elitecrownlands_helm",
	Stone_T1: "stone_t1_helm",
	Stone_T2: "stone_t2_helm",
};
const MeleeArmorItem = {
	Bronze: "bronze_armor",
	Iron: "iron_armor",
	Steel: "steel_armor",
	Adamantine: "adamantine_armor",
	Dragonsteel: "dragonsteel_armor",
	GoldObsidian: "goldobsidian_armor",
	Obsidian: "obsidian_armor",
	BlackObsidian: "blackobsidian_armor",
	EliteCrownlands: "elitecrownlands_armor",
	Stone_T1: "stone_t1_armor",
	Stone_T2: "stone_t2_armor",
};
const RangedArmorItem = {
	Leather: "leather_armor",
	Studded: "studded_leather_armor",
	BearHide: "bearhide_leather_armor",
	DragonHide: "dragonhide_leather_armor",
};
const ChainArmorItem = {
	Bronze: "bronze_chain_armor",
	Iron: "iron_chain_armor",
	Steel: "steel_chain_armor",
	Adamantine: "adamantine_chain_armor",
};
const PickaxeItem = {
	Bronze: "bronze_pickaxe",
	Iron: "iron_pickaxe",
	Steel: "steel_pickaxe",
	Adamantine: "adamantine_pickaxe",
	Obsidian: "obsidian_pickaxe",
};
const FishingRodItem = {
	Default: "bronze_fishing_rod",
	Enhanced: "enhanced_fishing_rod",
};
const RockItem = {
	Standard: "standard_rock",
};
export const HatchetItem = {
	Bronze: "bronze_hatchet",
	Iron: "iron_hatchet",
	Steel: "steel_hatchet",
	Adamantine: "adamantine_hatchet",
};
const SickleItem = {
	Bronze: "bronze_sickle",
	Iron: "iron_sickle",
	Steel: "steel_sickle",
	Adamantine: "adamantine_sickle",
};
const SkinningKnifeItem = {
	Bronze: "bronze_skinning_knife",
	Iron: "iron_skinning_knife",
	Steel: "steel_skinning_knife",
	Adamantine: "adamantine_skinning_knife",
};
const StrongholdKeyItem = {
	Montblanc: "stronghold_key_montblanc",
	Dover: "stronghold_key_dover",
	Eyras: "stronghold_key_eyras",
	Thornhill: "stronghold_key_thornhill",
	Bloodstone: "stronghold_key_bloodstone",
	Armagnac: "stronghold_key_armagnac",
	Warwick: "stronghold_key_warwick",
	Blackfort: "stronghold_key_blackfort",
};
const ChestKeyFabricatorItem = {
	Swamp: "swamp_chest_key_fabricator",
	Barrens: "barrens_chest_key_fabricator",
	Wilderness: "wilderness_chest_key_fabricator",
	DarkForest: "darkforest_chest_key_fabricator",
};
const ClothingItem = {
	Maid: "maid_clothing",
	BarAttendant: "barattendant_clothing",
	FancyFemale: "fancycommonerf_clothing",
	FancyMale: "fancycommonerm_clothing",
	RegalRobeMale: "highkingsrobes_clothing",
	RegalRobeFemale: "highqueensrobes_clothing",
	RegalRobePriest: "highpriestrobes_clothing",
	RedUnderwear: "redunderwear_clothing",
	BathRobe: "bathrobe_clothing",
	FigLeaf: "figleaf_clothing",
	NobleFemale: "noblef_armor",
	NobleMale: "noblem_armor",
	RogueRagFemale: "rougef_clothing",
	RogueRagMale: "rougem_clothing",
	Santa: "santa_clothing",
	Reindeer: "reindeer_clothing",
	BoxingShorts: "boxing_shorts_clothing",
	BlastWizardRobe: "blastwizard_robe",
	BlackWagerSuit: "blackwagersuits_clothing",
	RedWagerSuit: "redwagersuits_clothing",
	FroggyRobe: "froggyrobe_clothing",
	NekoRobe: "nekorobe_clothing",
	RedRobe: "redrobe_clothing",
	GhostlyRobe: "ghostly_robe",
	CatOnesie: "catonesie_clothing",
	DogOnesie: "dogonesie_clothing",
	Heisenberg: "heisenberg_clothing",
	BeeSuit: "beesuit_clothing",
	BlueSnakeSuit: "bluesnakesuit_clothing",
	GreenSnakeSuit: "greensnakesuit_clothing",
	Cthulhu: "cthulhu_clothing",
	DrManhattan: "drmanhattan_clothing",
	GigaChadDetective: "gigachaddetective_clothing",
	Streamer: "streamer_clothing",
	Saitama: "saitama_clothing",
	Wassie: "wassie_clothing",
	NeoSuit: "neosuit_clothing",
	FounderJacket: "founderjacket_clothing",
};
const HatItem = {
	HighKingCrown: "highkingcrown",
	HighQueenCrown: "highqueencrown",
	RogueHeadbandFemale: "rogueheadbandf",
	RogueHeadbandMale: "rogueheadbandm",
	Eggshell: "eggshellhatm",
	BlueBoater: "fancyhat_blue",
	BannisterCap: "regalcapa",
	PumpkinHead: "pumpkinhead",
	PurplePartyHat: "purplepartyhat",
	BluePartyHat: "bluepartyhat",
	WhitePartyHat: "whitepartyhat",
	RedPartyHat: "redpartyhat",
	GreenPartyHat: "greenpartyhat",
	Reindeer: "reindeerhat",
	Elf: "elfhatwhite",
	ElfGold: "elfhatgold",
	ElfGreen: "elfhatgreen",
	Wif: "wifhat",
	NewYear2024Goggles: "newyear2024goggles",
	MattiGoggles: "mattigoggles",
	AngelHalo: "angelhalo",
	Beanie: "beanie",
	ChefHat: "chefshat",
	BlastWizardHood: "blastwizard_hood",
	RedWagerTopHat: "redwagertophat",
	BlackWagerTopHat: "blackwagertophat",
	TintedGoggles: "tintedgoggles",
	WhiteBeret: "whiteberet",
	NekoHoodie: "nekohoodie",
	TriShades: "trishades",
	RedRobeHood: "redrobehood",
	FroggyCollar: "froggycollar",
	PacmoonHead: "pacmoonhead",
	BirthdayHat: "birthdayhat",
	BlackMask: "blackmask",
	EyesSightContraption: "eyessightcontraption",
	GhostlyHoodie: "ghostlyrobeshoodie",
	MagicRobesHoodie: "magicrobeshoodie",
	RobinHoodHat: "robinhoodhat",
	ClownMask: "clownmask",
	DogHoodie: "doghoodie",
	CatHoodie: "cathoodie",
	HeisenbergHat: "heisenberghat",
	BeeHat: "beehat",
	BlueSnakeHat: "bluesnakehat",
	GreenSnakeHat: "greensnakehat",
	CthulhuMask: "cthulhumask",
	DrManhattanHat: "drmanhattanhat",
	GigaChadDetectiveHat: "gigachaddetectivehat",
	StreamerHat: "streamerhat",
	SaitamaHead: "saitamahead",
	WassieBand: "wassieband",
	NeoHead: "neohead",
	RudimentarySlayerMask: "rudimentary_slayer_mask",
	SlayerMask: "slayer_mask",
	MVHQ: "mvhq_goggles",
	NewYear2025ScarfGreen: "newyear2025scarfgreen",
	NewYear2025ScarfWhite: "newyear2025scarfwhite",
	Fishing: "fishinghat",
};

export const BackpackItem = {
	NoviceBasic: "novicebasic_backpack",
	ExpertTactical: "experttactical_backpack",
	SeasonedAdventurer: "seasonedadventurer_backpack",
	AvasAccumulator: "avasaccumulator_backpack",
};
const MagicEquipmentItem = {
	WizardHatImitation: "wizardhat_red",
	Magic: "magic_robe",
	Enchanted: "enchanted_robe",
	Mystic: "mystic_robe",
	BattleMage: "battlemage_robe",
	Cultist: "cultist_robe",
	CultistHood: "cultist_hood",
	WizardHat: "wizardhat",
};
const FunnyWeaponItem = {
	RubberChicken: "rubber_chicken",
	Tomato: "tomato",
	SnowBall: "snowball",
};
const ChristmasItem = {
	Cracker: "cracker_generic",
	RedCracker: "cracker_red",
	GreenCracker: "cracker_green",
	BlueCracker: "cracker_blue",
	SantaHat: "santahatwhite",
	SantaHatGold: "santahatgold",
	LumpOfCoal: "lumpofcoal",
};
const OrbItem = {
	Energy: "stable_energy_orb",
};
const BoostItem = {
	Focus: "focus_boost",
};
const StressItem = {
	StrongAle: "strong_ale",
	LuckyCharm: "lucky_charm",
	RabbitFoot: "rabbit_foot",
};
const DiskItem = {
	Nature: "nature_disk",
};
const ScrollItem = {
	WarpTeleport: "warp_teleport_scroll",
	Teleport: "teleport_scroll",
	TeleportGateCapital: "teleport_gate_capital",
	TeleportGateNewMortis: "teleport_gate_newmortis",
	Teleblock: "teleblock_scroll",
};
const TeleportTabItem = {
	CAPITAL_CITY: "teleport_tab_capital",
};
const LampItem = {
	Experience: "experience_lamp",
};
const PartsItem = {
	BasicParts: "basic_parts",
	ComplexParts: "complex_parts",
};
const ChestItem = {
	Reward: "reward_chest",
	PugilistReward: "reward_chest_pugilist",
	OddsmakerReward: "reward_chest_oddsmaker",
	Starter_Small: "starter_chest_small",
	Starter_Big: "starter_chest_big",
};
const BlastItem = {
	Tome: "blast_tome",
};
const TomeItem = {
	Insight: "insight_tome",
};
const ChampionTokenItem = {
	ElementalFire: "elemental_fire",
	MiniDragon: "mini_dragon",
	Reaver: "reaver",
	ShieldBearer: "shield_bearer",
	SwampFiend: "swamp_fiend",
	SwampLich: "swamp_lich",
	TreeEnt: "tree_ent",
	Vampire: "vampire",
	Werewolf: "werewolf",
	ChampionToken1: "ChampionToken1",
	ElementalFire1: "elemental_fire_1",
	MiniDragon1: "mini_dragon_1",
	Reaver1: "reaver_1",
	ShieldBearer1: "shield_bearer_1",
	SwampFiend1: "swamp_fiend_1",
	SwampLich1: "swamp_lich_1",
	TreeEnt1: "tree_ent_1",
	Vampire1: "vampire_1",
	Werewolf1: "werewolf_1",
};
const RoyalLootItem = {
	GoldOre: "gold_ore",
	PileOfGems: "pile_of_gems",
	ArtifactTier1: "artifact_tier1",
	ArtifactTier2: "artifact_tier2",
	ArtifactTier3: "artifact_tier3",
	ArtifactTier4: "artifact_tier4",
	ArtifactTier5: "artifact_tier5",
	Curio: "curio",
};
const RingItem = {
	Lycian: "lycian_ring",
	Family: "family_ring",
	SlayerBarrens: "slayer_ring",
	SlayerDarkForest: "slayer_darkforest_ring",
	SlayerWastes: "slayer_wastes_ring",
	Bleed: "bleed_ring",
	Poison: "poison_ring",
	Burn: "burn_ring",
	Insight: "insight_ring",
};
const AmuletItem = {
	Lycian: "lycian_amulet",
	Wrath: "wrath_amulet",
	Agony: "agony_amulet",
	Magic: "magic_amulet",
	Strength: "strength_amulet",
	Power: "power_amulet",
};
const ItemCreationSource = {
	PlayerDrop: "player_drop",
	MysteryObject: "mystery_object",
};
const ItemContainerLocation = {
	Collection_Box: "collection_box",
	Inventory: "inventory",
	GuildChest: "guildChest",
	GuildSafe: "guildSafe",
	Stronghold: "stronghold",
	Equipment: "equipment",
	Bank: "bank",
	Ground: "ground",
	Wagon: "wagon",
	LootBag: "loot_bag",
	Cannon: "cannon",
	ArmoryShop: "armory_shop",
	ArenaShop: "arena_shop",
	GeneralStoreShop: "general_store_shop",
	BarShop: "bar_shop",
	IndigoShop: "indigo_shop",
	PaytonsShop: "paytons_shop",
	DuraksShop: "duraks_shop",
	OddOnesShop: "odd_ones_shop",
	AmberShop: "amber_shop",
	GrimwickShop: "grimwick_shop",
	GoodForShoppinShop: "good_for_shoppin_shop",
	AlanamentiShop: "alanamenti_shop",
	DariusShop: "darius_shop",
	Mailbox: "mailbox",
	DevStoreShop: "dev_store_shop",
	OnchainTradeEscrow: "onchain_trade_escrow",
};
// const everyItemConst = [
// 	ArenaDaggerItem,
// 	DaggerItem,
// 	PoisonedDaggerItem,
// 	SwordItem,
// 	ShortswordItem,
// 	CrossbowItem,
// 	RepeaterItem,
// 	WhipItem,
// 	AxeItem,
// 	MaulItem,
// 	StaffItem,
// 	RawFishItem,
// 	MagicChargeItem,
// 	ArrowItem,
// 	PoisonedArrowItem,
// 	BoltItem,
// 	EnchantedBoltItem,
// 	PoisonedBoltItem,
// 	OreItem,
// 	BarItem,
// 	JoltbladeItem,
// 	ShardItem,
// 	MaterialItem,
// 	GemstoneItem,
// 	HerbType,
// 	FiberHerbType,
// 	NailItem,
// 	PotionItem,
// 	DrugItem,
// 	MeleeHelmItem,
// 	MeleeArmorItem,
// 	ChainArmorItem,
// 	RangedArmorItem,
// 	PickaxeItem,
// 	FishingRodItem,
// 	HatchetItem,
// 	ClothingItem,
// 	MagicEquipmentItem,
// 	CurrencyItem,
// 	ChestKeyFabricatorItem,
// 	ChestItem,
// 	MealItem,
// 	FunnyWeaponItem,
// 	HatItem,
// 	SpecialItem,
// 	ChristmasItem,
// 	TorchItem,
// 	LongbowItem,
// 	ShortbowItem,
// 	PoisonedJavelinItem,
// 	JavelinItem,
// 	OrbItem,
// 	DiskItem,
// 	SickleItem,
// 	SkinningKnifeItem,
// 	ScrollItem,
// 	TeleportTabItem,
// 	BackpackItem,
// 	LampItem,
// 	RockItem,
// 	WarClubItem,
// 	BatteringClubItem,
// 	BattleAxeItem,
// 	SpearItem,
// 	ChainWhipItem,
// 	FalchionItem,
// 	PoisonedFalchionItem,
// 	GreatswordItem,
// 	BlastItem,
// 	ChampionTokenItem,
// 	ObjectItem,
// 	CannonballItem,
// 	TrapItem,
// 	RoyalLootItem,
// 	BookItem,
// 	DefenderItem,
// 	KiteShieldItem,
// 	ArenaFalchionItem,
// 	StrongholdKeyItem,
// 	HandCannonItem,
// 	ShotItem,
// 	BoostItem,
// 	RingItem,
// 	AmuletItem,
// 	PartsItem,
// 	ShroomShakerItem,
// 	ShroomChargeItem,
// 	StressItem,
// 	TomeItem,
// ] as const;
// const ItemSchemaZod = everyItemConst.map((ln) => z$6.nativeEnum(ln));
// Используем специальный подход с двумя обязательными элементами
// const dummy = z$6.never();
// const tupleItems = [...ItemSchemaZod] as [...z$6.ZodTypeAny[]];
// const ItemTypeEnum = z$6.union(tupleItems);
// const everyItemType = new Set(
// 	everyItemConst.flatMap((ln) => Object.values(ln)),
// );

export enum NpcType {
	TUTORIAL_GUTHAR = "tutorial_guthar",
	ADAM = "adam",
	ADAM_NO_OFFSET = "adam_no_offset",
	JOHN = "john",
	ARTHUR = "arthur",
	GUTHAR = "guthar",
	VIKTOR = "viktor",
	BRUBEC = "brubec",
	ELMER = "elmer",
	GOKHAN = "gokhan",
	MATILDA = "matilda",
	PAYTON = "payton",
	DURAK = "durak",
	ODA = "oda",
	AMBER = "amber",
	GRIMWICK = "grimwick",
	GOOD_FOR_SHOPPIN = "good_for_shoppin",
	ALANAMENTI = "alanamenti",
	DARIUS = "darius",
	SCOTTY = "scotty",
	VERNON = "vernon",
	SUAT = "suat",
	REGINALD = "reginald",
	LYDIA = "lydia",
	SIR_ALTHUS = "sir_althus",
	FATHER_TRENT = "father_trent",
	FLORE = "flore",
	MARKUS = "markus",
	INDIGO = "indigo",
	LOCKUS = "lockus",
	EP_WIZARD = "ep_wizard",
	GUARD = "capital_guard",
	STRONGHOLD_GATE = "strongholdGate",
	SKELETON = "skeleton",
	DRAGON = "dragon",
	DRAGON_LARGE = "dragon_green_large",
	GIANT_RAT = "giant_rat",
	WAGON = "wagon",
	BARRICADE = "barricade",
	TELEPORT_PORTAL = "teleportPortal",
	SWAMP_FIEND = "swamp_fiend",
	SWAMP_LICH = "swamp_lich",
	VAMPIRE = "vampire",
	WEREWOLF = "werewolf",
	BANSHEE = "banshee",
	BEAR = "bear",
	BOAR = "boar",
	ELEMENTAL_FIRE = "elemental_fire",
	ELEMENTAL_VOID = "elemental_void",
	ELEMENTAL_BLOOD = "elemental_blood",
	ELEMENTAL_FELLFIRE = "elemental_fellfire",
	ELEMENTAL_WATER = "elemental_water",
	IMP = "imp",
	INFANTRYMEN = "infantryman",
	MEGA_MAGGOT = "mega_maggot",
	POSSESSED_ZOMBIE = "possessed_zombie",
	SKELETON_MAGE = "skeleton_mage",
	SKELETON_ARCHER = "skeleton_archer",
	STONE_GARGOYLE = "stone_gargoyle",
	TREANT_FEMALE = "treant_female",
	TREANT_MALE = "treant_male",
	WOLF = "wolf",
	COW = "cow",
	SHEEP = "sheep",
	CHICKEN = "chicken",
	DEER = "deer",
	CYCLOPS = "cyclops",
	DUNGEON_CYCLOPS = "dungeon_cyclops",
	SHIELD_BEARER = "shield_bearer",
	REAVER = "reaver",
	MINI_DRAGON = "mini_dragon",
	ANGEL_COCOON = "angel_cocoon",
	MOTH = "moth",
	SLIME = "slime",
	BONEBORNE_ASSASSIN = "boneborne_assassin",
	BONEBORNE_CHANTER = "boneborne_chanter",
	SHROOM_GHOST = "shroom_ghost",
	SHROOM_SHAMAN = "shroom_shaman",
	SHROOM_WARRIOR = "shroom_warrior",
	SHROOM_GUY = "shroom_guy",
	SPIDER_CULT_CROSSBOWMAN = "spider_cult_crossbowman",
	SPIDER_CULT_DJINN = "spider_cult_djinn",
	BANSHEE_SKELETON = "banshee_skeleton",
	ROCK_GOLEM = "rock_golem",
	ROCK_CRAB = "rock_crab",
	MINI_BOSS_SHAMAN = "mini_boss_shaman",
	SNAKE = "snake",
	FROG = "frog",
	STONE_GOLEM = "stone_golem",
	ELITE_STONE_GOLEM = "elite_stone_golem",
	MEGATUR_PERSUADER = "megatur_persuader",
	MEGATUR_PRIMALIST = "megatur_primalist",
	MEGATUR_RAIDER = "megatur_raider",
	SHROOM_LORD = "shroom_lord",
	CANNON = "cannon",
	TREASURE_TOAD = "treasure_toad",
	IMPERIAL_WIZARD = "imperial_wizard",
	BROKEN_LEGIONNAIRE = "broken_legionnaire",
	SHADOWSOUL_CANNIBAL = "shadowsoul_cannibal",
	ELITE_SHADOWSOUL_CANNIBAL = "elite_shadowsoul_cannibal",
	BLACKSMITH = "blacksmith",
	SHADOWSOUL_SPIRITMANCER = "shadowsoul_spiritmancer",
	SHADOWSOUL_KNIGHT = "shadowsoul_knight",
	REYNARD = "reynard",
	JAKUB = "jakub",
	FISHERMAN = "fisherman",
	BUTCHER = "butcher",
	BROKEN_CASTIGATOR = "broken_castigator",
	BROKEN_FELBOURNE = "broken_felbourne",
	WYRMKIN_SPITTER = "wyrmkin_spitter",
	CLARA = "clara",
	WYRMKIN_HUNTER = "wyrmkin_hunter",
	WYRMKIN_WARRIOR = "wyrmkin_warrior",
	SWAMP_BOSS = "swamp_boss",
	SWAMP_BOSS_TAIL = "swamp_boss_tail",
	SWAMP_BOSS_MIDDLE = "swamp_boss_middle",
	SWAMP_LEECH = "swamp_leech",
	RUSLVN = "ruslvn",
	BANDIT_ASSASSIN = "bandit_assassin",
	BANDIT_ARCHER = "bandit_archer",
	BANDIT_MAGE = "bandit_mage",
	CHAMP_MINI_DRAGON = "champ_mini_dragon",
	CHAMP_SWAMP_FIEND = "champ_swamp_fiend",
	CHAMP_SWAMP_LICH = "champ_swamp_lich",
	CHAMP_ELEMENTAL_FIRE = "champ_elemental_fire",
	CHAMP_VAMPIRE = "champ_vampire",
	CHAMP_WEREWOLF = "champ_werewolf",
	CHAMP_TREE_ENT = "champ_tree_ent",
	CHAMP_REAVER = "champ_reaver",
	CHAMP_SHIELD_BEARER = "champ_shield_bearer",
	FOUNDER_FALCON = "founder_falcon",
	MALE_CITIZEN = "male_citizen",
	FEMALE_CITIZEN = "female_citizen",
	DOG = "dog",
	CAT = "cat",
	GRIFFIN = "griffin",
	WYVERN = "wyvern",
}

const rosterTypes = [
	NpcType.CHAMP_SWAMP_LICH,
	NpcType.CHAMP_ELEMENTAL_FIRE,
	NpcType.CHAMP_VAMPIRE,
	NpcType.CHAMP_WEREWOLF,
	NpcType.CHAMP_SWAMP_FIEND,
	NpcType.CHAMP_TREE_ENT,
	NpcType.CHAMP_SHIELD_BEARER,
	NpcType.CHAMP_REAVER,
	NpcType.CHAMP_MINI_DRAGON,
];
const CrossbowSchema = z$6.nativeEnum(CrossbowItem);
const RepeaterSchema = z$6.nativeEnum(RepeaterItem);
const LongbowSchema = z$6.nativeEnum(LongbowItem);
const ShortbowSchema = z$6.nativeEnum(ShortbowItem);
const JavelinSchema = z$6.nativeEnum(JavelinItem);
const PoisonedJavelinSchema = z$6.nativeEnum(PoisonedJavelinItem);
const HandCannonSchema = z$6.nativeEnum(HandCannonItem);
const ShroomShakerSchema = z$6.nativeEnum(ShroomShakerItem);
const StaffSchema = z$6.nativeEnum(StaffItem);
const SwordSchema = z$6.nativeEnum(SwordItem);
const JoltbladeSchema = z$6.nativeEnum(JoltbladeItem);
const ShortswordSchema = z$6.nativeEnum(ShortswordItem);
const WhipSchema = z$6.nativeEnum(WhipItem);
const DaggerSchema = z$6.nativeEnum(DaggerItem);
const PoisonedDaggerSchema = z$6.nativeEnum(PoisonedDaggerItem);
const ArenaDaggerSchema = z$6.nativeEnum(ArenaDaggerItem);
const MaulSchema = z$6.nativeEnum(MaulItem);
const AxeSchema = z$6.nativeEnum(AxeItem);
const BattleAxeSchema = z$6.nativeEnum(BattleAxeItem);
const SpearSchema = z$6.nativeEnum(SpearItem);
const WarClubSchema = z$6.nativeEnum(WarClubItem);
const BatteringClubSchema = z$6.nativeEnum(BatteringClubItem);
const GreatswordSchema = z$6.nativeEnum(GreatswordItem);
const FalchionSchema = z$6.nativeEnum(FalchionItem);
const PoisonedFalchionSchema = z$6.nativeEnum(PoisonedFalchionItem);
const ChainWhipSchema = z$6.nativeEnum(ChainWhipItem);
const RockSchema = z$6.nativeEnum(RockItem);
const ArenaFalchionSchema = z$6.nativeEnum(ArenaFalchionItem);
const FunnyWeaponSchema = z$6.nativeEnum(FunnyWeaponItem);
const MagicChargeSchema = z$6.nativeEnum(MagicChargeItem);
const BoltSchema = z$6.nativeEnum(BoltItem);
const ArrowSchema = z$6.nativeEnum(ArrowItem);
const PoisonedArrowSchema = z$6.nativeEnum(PoisonedArrowItem);
const PoisonedBoltSchema = z$6.nativeEnum(PoisonedBoltItem);
const ShotSchema = z$6.nativeEnum(ShotItem);
const ShroomChargeSchema = z$6.nativeEnum(ShroomChargeItem);
const EnchantedBoltSchema = z$6.nativeEnum(EnchantedBoltItem);
const MaterialSchema = z$6.nativeEnum(MaterialItem);
const OreSchema = z$6.nativeEnum(OreItem);
const BarSchema = z$6.nativeEnum(BarItem);
const NailSchema = z$6.nativeEnum(NailItem);
const ShardSchema = z$6.nativeEnum(ShardItem);
const GemstoneSchema = z$6.nativeEnum(GemstoneItem);
const MeleeHelmSchema = z$6.nativeEnum(MeleeHelmItem);
const MeleeArmorSchema = z$6.nativeEnum(MeleeArmorItem);
const RangedArmorSchema = z$6.nativeEnum(RangedArmorItem);
const ChainArmorSchema = z$6.nativeEnum(ChainArmorItem);
const PickaxeSchema = z$6.nativeEnum(PickaxeItem);
const FishingRodSchema = z$6.nativeEnum(FishingRodItem);
const HatchetSchema = z$6.nativeEnum(HatchetItem);
const SickleSchema = z$6.nativeEnum(SickleItem);
const SkinningKnifeSchema = z$6.nativeEnum(SkinningKnifeItem);
const TorchSchema = z$6.nativeEnum(TorchItem);
const DefenderSchema = z$6.nativeEnum(DefenderItem);
const KiteShieldSchema = z$6.nativeEnum(KiteShieldItem);
const BookSchema = z$6.nativeEnum(BookItem);
const MagicEquipmentSchema = z$6.nativeEnum(MagicEquipmentItem);
const RawFishSchema = z$6.nativeEnum(RawFishItem);
const PartsSchema = z$6.nativeEnum(PartsItem);
const PotionSchema = z$6.nativeEnum(PotionItem);
const DrugSchema = z$6.nativeEnum(DrugItem);
const ClothingSchema = z$6.nativeEnum(ClothingItem);
const MealSchema = z$6.nativeEnum(MealItem);
const CurrencySchema = z$6.nativeEnum(CurrencyItem);
const ChestKeyFabricatorSchema = z$6.nativeEnum(ChestKeyFabricatorItem);
const ChestSchema = z$6.nativeEnum(ChestItem);
const ChristmasItemsSchema = z$6.nativeEnum(ChristmasItem);
const HatSchema = z$6.nativeEnum(HatItem);
const SpecialItemSchema = z$6.nativeEnum(SpecialItem);
const ScrollSchema = z$6.nativeEnum(ScrollItem);
const TeleportTabSchema = z$6.nativeEnum(TeleportTabItem);
const OrbSchema = z$6.nativeEnum(OrbItem);
const DiskSchema = z$6.nativeEnum(DiskItem);
const BackpackSchema = z$6.nativeEnum(BackpackItem);
const LampSchema = z$6.nativeEnum(LampItem);
const BlastSchema = z$6.nativeEnum(BlastItem);
const ChampionTokenSchema = z$6.nativeEnum(ChampionTokenItem);
const ObjectItemSchema = z$6.nativeEnum(ObjectItem);
const StressItemSchema = z$6.nativeEnum(StressItem);
const CannonballSchema = z$6.nativeEnum(CannonballItem);
const TrapItemSchema = z$6.nativeEnum(TrapItem);
const RoyalLootSchema = z$6.nativeEnum(RoyalLootItem);
z$6.nativeEnum(StressItem);
const StrongholdKeySchema = z$6.nativeEnum(StrongholdKeyItem);
const BoostSchema = z$6.nativeEnum(BoostItem);
const RingSchema = z$6.nativeEnum(RingItem);
const AmuletSchema = z$6.nativeEnum(AmuletItem);
const NullSchema = z$6.nativeEnum(NullItem);
const HerbTypeSchema = z$6.nativeEnum(HerbType);
const FiberHerbTypeSchema = z$6.nativeEnum(FiberHerbType);
z$6.nativeEnum(ItemContainerLocation);
z$6.nativeEnum(ItemCreationSource);
const TomeSchema = z$6.nativeEnum(TomeItem);
const RangedWeaponSchema = z$6.union([
	CrossbowSchema,
	RepeaterSchema,
	LongbowSchema,
	ShortbowSchema,
	JavelinSchema,
	PoisonedJavelinSchema,
	HandCannonSchema,
	ShroomShakerSchema,
]);
const MeleeWeaponSchema = z$6.union([
	SwordSchema,
	ShortswordSchema,
	WhipSchema,
	DaggerSchema,
	PoisonedDaggerSchema,
	ArenaDaggerSchema,
	AxeSchema,
	BattleAxeSchema,
	SpearSchema,
	WarClubSchema,
	JoltbladeSchema,
	BatteringClubSchema,
	GreatswordSchema,
	FalchionSchema,
	PoisonedFalchionSchema,
	ChainWhipSchema,
	RockSchema,
	ArenaFalchionSchema,
]);
const WeaponSchema = z$6.union([
	MeleeWeaponSchema,
	RangedWeaponSchema,
	StaffSchema,
	FunnyWeaponSchema,
]);
const ChargeSchema = z$6.union([
	MagicChargeSchema,
	BoltSchema,
	ArrowSchema,
	PoisonedArrowSchema,
	PoisonedBoltSchema,
	ShotSchema,
	ShroomChargeSchema,
	EnchantedBoltSchema,
]);
const HerbSchema = z$6.union([HerbTypeSchema, FiberHerbTypeSchema]);
const IngredientSchema = z$6.union([
	MaterialSchema,
	OreSchema,
	BarSchema,
	NailSchema,
	ShardSchema,
	GemstoneSchema,
	HerbSchema,
]);
const ArmorSchema = z$6.union([
	MeleeArmorSchema,
	RangedArmorSchema,
	ChainArmorSchema,
	MeleeHelmSchema,
]);
const ToolSchema = z$6.union([
	PickaxeSchema,
	FishingRodSchema,
	HatchetSchema,
	SickleSchema,
	SkinningKnifeSchema,
]);
const OffhandSchema = z$6.union([
	TorchSchema,
	DefenderSchema,
	KiteShieldSchema,
	BookSchema,
]);
const ItemTypeSchema = z$6.union([
	WeaponSchema,
	ChargeSchema,
	IngredientSchema,
	ArmorSchema,
	ToolSchema,
	OffhandSchema,
	RawFishSchema,
	PotionSchema,
	DrugSchema,
	ClothingSchema,
	MagicEquipmentSchema,
	MealSchema,
	CurrencySchema,
	ChestKeyFabricatorSchema,
	ChestSchema,
	FunnyWeaponSchema,
	ChristmasItemsSchema,
	HatSchema,
	SpecialItemSchema,
	ScrollSchema,
	TeleportTabSchema,
	OrbSchema,
	DiskSchema,
	BackpackSchema,
	LampSchema,
	BlastSchema,
	ChampionTokenSchema,
	ObjectItemSchema,
	CannonballSchema,
	TrapItemSchema,
	RoyalLootSchema,
	StrongholdKeySchema,
	BoostSchema,
	RingSchema,
	AmuletSchema,
	PartsSchema,
	NullSchema,
	MaulSchema,
	StressItemSchema,
	TomeSchema,
]);

export enum ModalTypes {
	COOKING_TABLE = "cookingTable",
	ESSENCE_LEADERBOARD = "essenceLeaderboard",
	SKILLS_LEADERBOARD = "skillsLeaderboard",
	MATCH_HISTORY = "matchHistory",
	ITEM_TRANSFER_SCREEN = "bank",
	SHOP_SCREEN = "shop_screen",
	SKILLING_SHOP_SCREEN = "skilling_shop_screen",
	SLAYER_SHOP_SCREEN = "slayer_shop_screen",
	SHOP_GENERAL_STORE_SCREEN = "general_store_shop",
	PATCH_NOTES = "patchNotes",
	TRADING_POST_SCREEN = "trading_post",
	REPAIR_SCREEN = "repair_screen",
	DUEL_REQUEST = "duelRequest",
	DUEL_ENTRY = "duelEntry",
	POST_DUEL = "postDuel",
	HIGH_STAKE_ANNOUNCEMENT = "highStakeAnnouncement",
	ERROR_MODAL = "errorModal",
	DUEL_PREFERENCES = "duelPreferences",
	EPILEPSY_WARNING = "epilepsyWarning",
	CHRISTMAS_REWARDS = "christmasRewards",
	CRACKER_SELECTION = "crackerSelection",
	SPECTATOR_BET = "spectatorBet",
	TRADE_SCREEN = "tradeScreen",
	EXPERIENCE_SCROLL = "experienceScroll",
	ESSENCE_REWARDS = "essenceRewards",
	SELECT_TITLE = "selectTitle",
	DUEL_BET_REWARDS = "duelBetRewards",
	DROP_CONFIRMATION = "dropConfirmation",
	ESSENCE_STAKING = "essenceStaking",
	CONFIRMATION_MODAL = "confirmationModal",
	ROYAL_TREASURY = "royalTreasury",
	ROYAL_FAVOR_LEADERBOARD = "royalFavorLeaderboard",
	SPLIT_SLIDER = "splitSlider",
	KEYBINDS_MODAL = "keyBindsModal",
	MAILBOX_SCREEN = "mailboxScreen",
	DUEL_SQUAD_NOTIFICATION = "duelSquadNotification",
	STRONGHOLD_GATE_REPAIR = "strongholdGateRepair",
	STRONGHOLD_GATE_UPGRADE = "strongholdGateUpgrade",
	STRONGHOLD_UPKEEP_MODAL = "strongholdUpkeepModal",
	ENERGY_ORB_PURCHASE = "energyOrbPurchase",
	WAGON_FACTORY_MODAL = "wagonFactoryModal",
	WORLD_MAP = "worldMap",
	ALCHEMY_TABLE = "alchemyTable",
	CRAFTING_TABLE = "craftingTable",
	FORGE_SCREEN = "forgeScreen",
	EQUIPMENT_SCREEN = "equipmentScreen",
	EXCALIBUR_WINNINGS = "excaliburHistory",
	ENGINEERING_TABLE = "engineeringTable",
	TRAVEL_PLANNER = "travelPlanner",
	POISON_TABLE = "poisonTable",
	ENERGY_ALTAR_INTERFACE = "energyAltarInterface",
	SKILLING_REWARDS = "skillingRewards",
	BUY_CHARTER = "buyCharter",
	CHANGE_WORLD = "changeWorld",
	INSIGHT_TOME = "insightTome",
	COMPANION_PERKS = "companionPerks",
	COMPANION_DETAILS = "companionDetails",
	COMPANION_SELECTION = "companionSelection",
	GUILD_SCREEN = "guildScreen",
	MASTERIES = "masteries",
	SKILL_GUIDE = "skillGuide",
	ONCHAIN_TRADE_HISTORY = "onchainTradeHistory",
}

export enum StrongholdName {
	Capital = "Capital",
	NewMortis = "newMortis",
	Montblanc = "Montblanc",
	Bloodstone = "Bloodstone",
	Blackfort = "Blackfort",
	Thornhill = "Thornhill",
	Armagnac = "Armagnac",
	Eyras = "Eyras",
	Dover = "Dover",
	Warwick = "Warwick",
}

export enum ItemGenerationType {
	Alchemy = "alchemy",
	Smithing = "smithing",
	Smelting = "smelting",
	Scrapping = "scrapping",
	Crafting = "crafting",
	Cooking = "cooking",
	Engineering = "engineering",
	PoisonCrafting = "poisonCrafting",
}

export enum OrbName {
	GOLD = "gold",
	SILVER = "silver",
	BRONZE = "bronze",
	RUGGED = "rugged",
}

export enum OrderType {
	Buy = "Buy",
	Sell = "Sell",
}

export enum IDuelDBState {
	Pending = "pending",
	Joined = "joined",
	InProgress = "in_progress",
	EndedToClaim = "ended_to_claim",
	EndedToWithdraw = "ended_to_withdraw",
	EndedToNullify = "ended_to_nullify",
	SettledClaimed = "settled_claimed",
	SettledWithdrawn = "settled_withdrawn",
	SettledNullified = "settled_nullified",
}

export enum StakeType {
	None = "none",
	GameItem = "game_item",
	CryptoAndNFT = "crypto_and_nft",
	CryptoEthereum = "crypto_ethereum",
}

export enum DuelRequestState {
	Pending = "pending",
	Negotiating = "negotiating",
	Depositing = "depositing",
	Accepted = "accepted",
	Declined = "declined",
	Cancelled = "cancelled",
	Completed = "completed",
	WaitingForContract = "waiting_for_contract",
	DeclinedInChat = "declined_in_chat",
}

export enum NegotiationState {
	Pending = "pending",
	Accepted = "accepted",
	Declined = "declined",
	Completed = "completed",
	Cancelled = "cancelled",
}

export enum DuelType {
	Regular = "regular",
	Boxing = "boxing",
	Whip = "whip",
	WhipDDS = "whip_dds",
	Dharoks = "dharoks",
	Falchion = "falchion",
}

const TutorialIslandTaskId = {
	WELCOME_TO_CAMBRIA: 1,
	GATHER_STARTER_TOOLS: 2,
	CREATE_WEAPONS: 3,
	CREATE_BRONZE_SWORD: 3001,
	GATHER_MATERIALS_BRONZE_SWORD: 3002,
	MINE_COPPER: 3003,
	MINE_TIN: 3004,
	CHOP_TREE: 3005,
	BUY_THREAD: 3006,
	CREATE_SHORTBOW: 3007,
	GATHER_MATERIALS_SHORTBOW: 3008,
	COLLECT_FIBER_PLANTS: 3009,
	CHOP_TREES: 3010,
	BUY_THREAD_SHORTBOW: 3011,
	CREATE_LONGBOW: 3012,
	GATHER_MATERIALS_LONGBOW: 3013,
	COLLECT_SICKLE_FIBER_PLANTS: 3014,
	CHOP_TREES_LONGBOW: 3015,
	BUY_THREAD_LONGBOW: 3016,
	GATHER_COW_HIDE: 4,
	KILL_COW: 4001,
	SKIN_COW: 4002,
	COOK_FOOD: 5,
	COOK_MEAT: 5001,
	COOK_FISH: 5002,
	LEAVE_THE_ISLAND: 7,
	SELL_ITEMS: 7001,
	PAY_FONG: 7002,
};

const CompanionSchema = z$6.object({
	image: z$6.string().optional(),
	name: z$6.string().optional(),
	external_url: z$6.string().optional(),
	tokenId: z$6.number().optional(),
	metadata: z$6
		.object({
			archetype: z$6.string().optional(),
			name: z$6.string().optional(),
			backstory: z$6.string().optional(),
			heritage_index: z$6.number().optional(),
			personality: z$6
				.object({
					reserved_sociable: z$6.number().optional(),
					follower_rebellious: z$6.number().optional(),
					patient_active: z$6.number().optional(),
				})
				.optional(),
			current_lifespan: z$6.number().optional(),
			goldrush_perks: z$6.array(z$6.string()).optional(),
			catchphrase: z$6.string().optional(),
			tokenId: z$6.number().optional(),
		})
		.optional(),
	attributes: z$6
		.array(
			z$6.object({
				display_type: z$6.enum(["string", "number"]).optional(),
				trait_type: z$6.string().optional(),
				value: z$6.union([z$6.string(), z$6.number()]).optional(),
			}),
		)
		.optional(),
});

export enum SkillType {
	Attack = "attack",
	Hitpoint = "hitpoint",
	Strength = "strength",
	Defense = "defense",
	Ranged = "ranged",
	Magic = "magic",
	Prayer = "prayer",
	Mining = "mining",
	Fishing = "fishing",
	Smithing = "smithing",
	Crafting = "crafting",
	Woodcutting = "woodcutting",
	Alchemy = "alchemy",
	Thieving = "thieving",
	Cooking = "cooking",
	Hunting = "hunting",
	Dueling = "dueling",
	Wagering = "wagering",
	Chargecrafting = "chargecrafting",
	Gathering = "gathering",
	Engineering = "engineering",
	Slayer = "slayer",
	Agility = "agility",
}

export type SkillTypeAlias = SkillType;
export const SkillType$1 = SkillType;

const WorkerItemGenerations = ["crafting", "smithing"] as const;

export enum Emote {
	TAUNT = "taunt",
	CHEER = "cheer",
	SIT = "sit",
	SALUTE = "salute",
	DANCE = "dance",
	BREW = "brew",
	DISCO_DANCE = "disco_dance",
	CRY = "cry",
	CAT_DANCE = "cat_dance",
}

export enum CombatType {
	MELEE = "MELEE",
	RANGED = "RANGED",
	MAGIC = "MAGIC",
}

export enum SpellId {
	HomeTeleport = "home-teleport",
	PaymasterTeleport = "paymaster-teleport",
	Snare = "snare",
	Telegrab = "telegrab",
	Teleblock = "teleblock",
	InstantAttack = "melee_ability_instant_attack",
	Tumble = "ranged_ability_tumble",
	FrostNova = "magic_ability_frost_nova",
	MasterMindControl = "magic_ability_master_mind_controller",
	TrapMaster = "ranged_ability_trap_master",
	WindRush = "wind-rush",
	WindStrike = "wind-strike",
	EarthStrike = "earth-strike",
	WaterStrike = "water-strike",
	FireStrike = "fire-strike",
	WindBolt = "wind-bolt",
	EarthBolt = "earth-bolt",
	WaterBolt = "water-bolt",
	FireBolt = "fire-bolt",
	WindBlast = "wind-blast",
	EarthBlast = "earth-blast",
	WaterBlast = "water-blast",
	FireBlast = "fire-blast",
	WindWave = "wind-wave",
	EarthWave = "earth-wave",
	WaterWave = "water-wave",
	FireWave = "fire-wave",
	WindSurge = "wind-surge",
	EarthSturge = "earth-surge",
	WaterSurge = "water-surge",
	FireSurge = "fire-surge",
	FrostBlitz = "frost-blitz",
	FrostBlitzer = "frost-blitzer",
	FrostBurst = "frost-burst",
	FrostBarrage = "frost-barrage",
}

export enum SpellTarget {
	Npc = "npc",
	Player = "player",
	GroundItem = "groundItem",
}

export enum ActiveCompanionPerk {
	BANK_ALL = "bank_all",
	CRAFTING = "remote_open_crafting",
	REPAIR = "remote_open_repair",
	SELL = "remote_open_general_store",
}

export enum PassiveCompanionPerk {
	AUTO_PICKUP = "auto_pickup",
	OFFSCREEN_INDICATOR = "offscreen_indicator",
	ITEM_SNATCH = "itemSnatch",
}

export enum DuelCombatStance {
	ACCURATE = "accurate",
	AGGRESSIVE = "aggressive",
	DEFENSIVE = "defensive",
}

export enum WidgetTypes {
	COMBAT_WIDGET = "combatWidget",
	COMPANION_WIDGET = "companionWidget",
	SPELLBOOK_WIDGET = "spellbookWidget",
	PRAYERBOOK_WIDGET = "prayerbookWidget",
	INVENTORY_WIDGET = "inventoryWidget",
	DUEL_PREFERENCE_WIDGET = "duelPreferenceWidget",
	FRIENDS_WIDGET = "friendsWidget",
	TIMED_ACTION_PROGRESS = "timedActionProgress",
	CHAT_MENU = "chatMenu",
	TOOLTIP_WIDGET = "tooltipWidget",
}

const GuildContainerLocationSchema = z$6.enum([
	ItemContainerLocation.GuildChest,
	ItemContainerLocation.GuildSafe,
]);

const PositionSchema = z$6.object({
	x: z$6.number(),
	y: z$6.number(),
});

const WalletAddressSchema = z$6.string().regex(/^0x[a-fA-F0-9]{40}$/);
const ItemIdSchema = z$6.string().uuid();
const ChatMessageSchema = z$6
	.string()
	.transform((ln) => ln.trim().slice(0, 255));

const InterfaceTypeSchema = z$6.union([
	z$6.nativeEnum(WidgetTypes),
	z$6.nativeEnum(ModalTypes),
]);
const IntegerSchema = z$6.number().int().finite();
const InterfaceInteractionSchema = z$6.object({
	type: InterfaceTypeSchema,
	data: z$6.object({}).passthrough(),
});

export enum PlayerRewardType {
	InviteSuccess = "invite-success",
	Cracker = "cracker",
	ChristmasDailyRewardOpen = "christmas-daily-reward-open",
	ChristmasDailyRewardClaim = "christmas-daily-reward-claim",
	EssenceRewardClaim = "essence-reward-claim",
}

export enum Shop {
	Armory = "shop_armory",
	Arena = "shop_arena",
	Bar = "shop_bar",
	GeneralStore = "shop_general_store",
	IndigoSupplies = "shop_indigo",
	PaytonsPlumeworks = "shop_paytons",
	DuraksDepartmentStore = "shop_duraks",
	OddOnesOddities = "shop_odd_ones",
	ArmorAtAmbers = "shop_amber",
	GrimwicksGiftshop = "shop_grimwick",
	GoodsForShoppin = "shop_good_for_shoppin",
	AlanamentiAndAssociates = "shop_alanamenti",
	DariusGoods = "shop_darius",
	DevStore = "shop_dev",
}

export const PingSchema = z$6.object({
	clientPerformanceTime: z$6.number(),
	clientTimestamp: z$6.number(),
	timeDriftBetweenClientAndServer: z$6.number(),
	roundTripTime: z$6.number(),
	ping: z$6.number(),
});

export enum GuildRole {
	Leader = "leader",
	Patron = "patron",
	Captain = "captain",
	Member = "member",
}

export enum LoginStage {
	ROLES_AND_PERMISSIONS = 0,
	ASYNC_CONFIGS = 1,
	CONTAINERS = 2,
	PLAYER_DATA = 3,
	STRING_CONFIGS = 4,
	INTERFACE_CONFIGS = 5,
}

export const NullItemConfig = {
	type: NullItem.Null,
	textureId: "null",
	name: "null",
	limit: 1,
	category: "material",
	fungible: !1,
	duelArenaOnly: !1,
	value: 0,
	equipmentSlot: null,
};

export enum AttackBonus {
	PIERCE = "pierce_bonus",
	SLASH = "slash_bonus",
	CRUSH = "crush_bonus",
	MAGIC = "magic_bonus",
	RANGED = "ranged_bonus",
	MELEE_STRENGTH = "strength_bonus",
	MAGIC_STRENGTH = "magic_strength_bonus",
	RANGED_STRENGTH = "ranged_strength_bonus",
}

export enum DefenseBonus {
	PIERCE = "pierce_bonus",
	SLASH = "slash_bonus",
	CRUSH = "crush_bonus",
	MAGIC = "magic_bonus",
	RANGED = "ranged_bonus",
	TENACITY = "tenacity_bonus",
	POISON_RESIST = "poison_resistance",
	BLEED_RESIST = "bleed_resistance",
	BURN_RESIST = "burn_resistance",
}

export enum DamageType {
	PIERCE = "pierce",
	SLASH = "slash",
	CRUSH = "crush",
	RANGED = "ranged",
	MAGIC = "magic",
}

export const swordWeaponStyles = [
	{
		name: "Slash",
		damageType: DamageType.SLASH,
	},
	{
		name: "Stab",
		damageType: DamageType.PIERCE,
	},
];

export const shortswordWeaponStyles = [
	{
		name: "Stab",
		damageType: DamageType.PIERCE,
	},
];

export const greatSwordWeaponStyles = [
	{
		name: "Slash",
		damageType: DamageType.SLASH,
	},
	{
		name: "Chop",
		damageType: DamageType.CRUSH,
	},
];

export const longbowWeaponStyles = [
	{
		name: "Accurate",
		damageType: DamageType.RANGED,
	},
];

export const shortbowWeaponStyles = [
	{
		name: "Accurate",
		damageType: DamageType.RANGED,
	},
];

export const crossbowWeaponStyles = [
	{
		name: "Accurate",
		damageType: DamageType.RANGED,
	},
];

export const javelinWeaponStyles = [
	{
		name: "Throw",
		damageType: DamageType.RANGED,
	},
];

export const chainWhipWeaponStyles = [
	{
		name: "Flick",
		damageType: DamageType.SLASH,
	},
	{
		name: "Lash",
		damageType: DamageType.CRUSH,
	},
];

export const daggerWeaponStyles = [
	{
		name: "Stab",
		damageType: DamageType.PIERCE,
	},
];

export const battleAxeWeaponStyles = [
	{
		name: "Chop",
		damageType: DamageType.SLASH,
	},
];

export const spearWeaponStyles = [
	{
		name: "Swipe",
		damageType: DamageType.SLASH,
	},
	{
		name: "Lunge",
		damageType: DamageType.PIERCE,
	},
];

export const handCannonStyles = [
	{
		name: "Fire",
		damageType: DamageType.RANGED,
	},
];

export const warClubWeaponStyles = [
	{
		name: "Pound",
		damageType: DamageType.CRUSH,
	},
];

export const batteringClubWeaponStyles = [
	{
		name: "Pound",
		damageType: DamageType.CRUSH,
	},
];

export const falchionWeaponStyles = [
	{
		name: "Stab",
		damageType: DamageType.PIERCE,
	},
];

export const rockWeaponStyles = [
	{
		name: "Pound",
		damageType: DamageType.CRUSH,
	},
];

export const staffWeaponStyles = [
	{
		name: "Wind Rush",
		damageType: DamageType.MAGIC,
	},
];

export enum EquipmentSlot {
	Body = "body",
	Head = "head",
	Weapon = "weapon",
	OffHand = "offhand",
	Ammo = "ammo",
	Backpack = "backpack",
	Amulet = "amulet",
	Ring = "ring",
}

export const itemConfigs = [
	NullItemConfig,
	{
		type: PickaxeItem.Bronze,
		textureId: "pickaxebronze",
		name: "Bronze Pickaxe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A pickaxe made of bronze, minor mining bonus.",
		value: 20,
		weight: 1.2,
		pickaxeSpeed: 0.5,
		tier: 1,
		isStarterItem: !0,
		baseFocusValue: 24,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Mining,
				level: 1,
			},
		],
	},
	{
		type: PickaxeItem.Iron,
		textureId: "pickaxeiron",
		name: "Iron Pickaxe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A pickaxe made of iron, moderate mining bonus.",
		pickaxeSpeed: 1,
		tier: 2,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 40,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Mining,
				level: 40,
			},
		],
		value: 100,
		weight: 1.6,
	},
	{
		type: PickaxeItem.Steel,
		textureId: "pickaxesteel",
		name: "Steel Pickaxe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A pickaxe made of steel, substantial mining bonus.",
		pickaxeSpeed: 2,
		tier: 3,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Mining,
				level: 60,
			},
		],
		value: 200,
		weight: 2,
	},
	{
		type: PickaxeItem.Adamantine,
		textureId: "pickaxeadamantine",
		name: "Adamantine Pickaxe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A pickaxe made of adamantine, exceptional mining bonus.",
		pickaxeSpeed: 4,
		tier: 4,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Mining,
				level: 80,
			},
		],
		value: 450,
		weight: 2.4,
	},
	{
		type: PickaxeItem.Obsidian,
		textureId: "pickaxeobsidian",
		name: "Obsidian Pickaxe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A pickaxe made of obsidian, unmatched mining bonus.",
		pickaxeSpeed: 5,
		tier: 5,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Obsidian,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 95,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Mining,
				level: 90,
			},
		],
		value: 1100,
		weight: 2.8,
	},
	{
		type: HatchetItem.Bronze,
		textureId: "hatchetbronze",
		name: "Bronze Hatchet",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A hatchet made of bronze, required for woodcutting.",
		value: 20,
		weight: 1.1,
		isStarterItem: !0,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Woodcutting,
				level: 1,
			},
		],
		tier: 1,
	},
	{
		type: HatchetItem.Iron,
		textureId: "hatchetiron",
		name: "Iron Hatchet",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A hatchet made of iron, moderate woodcutting bonus.",
		value: 100,
		weight: 1.5,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 40,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Woodcutting,
				level: 20,
			},
		],
		tier: 2,
	},
	{
		type: HatchetItem.Steel,
		textureId: "hatchetsteel",
		name: "Steel Hatchet",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A hatchet made of steel, substantial woodcutting bonus.",
		value: 200,
		weight: 1.9,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Woodcutting,
				level: 40,
			},
		],
		tier: 3,
	},
	{
		type: HatchetItem.Adamantine,
		textureId: "hatchetadamantine",
		name: "Adamantine Hatchet",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A hatchet made of adamantine, exceptional woodcutting bonus.",
		value: 450,
		weight: 2.3,
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Woodcutting,
				level: 60,
			},
		],
		tier: 4,
	},
	{
		type: SickleItem.Bronze,
		textureId: "bronzesickle",
		name: "Bronze Sickle",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A sickle made of bronze, required for gathering",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Gathering,
				level: 1,
			},
		],
		value: 20,
		weight: 0.9,
		tier: 1,
		isStarterItem: !0,
	},
	{
		type: SickleItem.Iron,
		textureId: "ironsickle",
		name: "Iron Sickle",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A sickle made of iron, moderate gathering bonus.",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 40,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Gathering,
				level: 40,
			},
		],
		value: 100,
		weight: 1.3,
		tier: 2,
	},
	{
		type: SickleItem.Steel,
		textureId: "steelsickle",
		name: "Steel Sickle",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A sickle made of steel, substantial gathering bonus.",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Gathering,
				level: 60,
			},
		],
		value: 200,
		weight: 1.7,
		tier: 3,
	},
	{
		type: SickleItem.Adamantine,
		textureId: "adamantinesickle",
		name: "Adamantine Sickle",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A sickle made of adamantine, exceptional gathering bonus.",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Gathering,
				level: 70,
			},
		],
		value: 450,
		weight: 2.1,
		tier: 4,
	},
	{
		type: SkinningKnifeItem.Bronze,
		textureId: "skinningknife_bronze",
		name: "Bronze Skinning Knife",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		isStarterItem: !0,
		description: "A knife made of bronze, required for skinning.",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Hunting,
				level: 1,
			},
		],
		value: 20,
		weight: 0.8,
		tier: 1,
	},
	{
		type: SkinningKnifeItem.Iron,
		textureId: "skinningknife_iron",
		name: "Iron Skinning Knife",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A knife made of iron, moderate skinning bonus.",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 40,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Hunting,
				level: 40,
			},
		],
		value: 100,
		weight: 1.2,
		tier: 2,
	},
	{
		type: SkinningKnifeItem.Steel,
		textureId: "skinningknife_steel",
		name: "Steel Skinning Knife",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A knife made of steel. Makes skinning faster.",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Hunting,
				level: 60,
			},
		],
		value: 200,
		weight: 1.6,
		tier: 3,
	},
	{
		type: SkinningKnifeItem.Adamantine,
		textureId: "skinningknife_adamantine",
		name: "Adamantine Skinning Knife",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		description: "A knife made of adamantine. Makes skinning faster.",
		smithing: {
			type: "tool",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Hunting,
				level: 70,
			},
		],
		value: 350,
		tier: 4,
	},
	{
		type: ShardItem.Bronze,
		name: "Bronze Shard",
		description: "Used to craft Bronze weapons",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 1,
		equipmentSlot: null,
		smithing: {
			type: "shard",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		value: 25,
		weight: 1.8,
	},
	{
		type: ShardItem.Iron,
		name: "Iron Shard",
		description: "Used to craft Iron weapons",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 2,
		equipmentSlot: null,
		smithing: {
			type: "shard",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 50,
				},
			],
		},
		value: 50,
		weight: 2.3,
	},
	{
		type: ShardItem.Steel,
		name: "Steel Shard",
		description: "Used to craft Steel weapons",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 3,
		equipmentSlot: null,
		smithing: {
			type: "shard",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		value: 75,
		weight: 2.7,
	},
	{
		type: ShardItem.Adamantine,
		name: "Adamantine Shard",
		description: "Used to craft Adamantine weapons",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 4,
		equipmentSlot: null,
		smithing: {
			type: "shard",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
		},
		value: 150,
		weight: 3.2,
	},
	{
		type: ShardItem.AdamantineMasterwork,
		name: "Adamantine Masterwork Shard",
		description: "Used to craft Adamantine Masterwork weapons",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 5,
		equipmentSlot: null,
		smithing: {
			type: "shard",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 9,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 90,
				},
			],
		},
		value: 150,
		weight: 3.2,
	},
	{
		type: WhipItem.Bloodroot,
		textureId: "bloodrootwhip",
		name: "Bloodroot Whip",
		category: "equipment",
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 82,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 82,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 15,
		distance: 35,
		combatType: CombatType.MELEE,
	},
	{
		type: WhipItem.Golden,
		textureId: "goldenwhip",
		name: "Golden Whip",
		category: "equipment",
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 82,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 82,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 5e3,
		distance: 35,
		combatType: CombatType.MELEE,
	},
	{
		type: WhipItem.CandyCane,
		textureId: "candycanewhip",
		name: "Candy Cane Whip",
		category: "equipment",
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 82,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 82,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 1500,
		distance: 35,
		combatType: CombatType.MELEE,
	},
	{
		type: AxeItem.Standard,
		textureId: "greataxe",
		name: "Great Axe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: -4,
			[AttackBonus.SLASH]: 103,
			[AttackBonus.CRUSH]: 95,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 105,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 30,
		distance: 35,
		combatType: CombatType.MELEE,
	},
	{
		type: AxeItem.Golden,
		textureId: "goldengreataxe",
		name: "Golden Great Axe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		equipmentSlot: "weapon",
		excludeFromTrade: !0,
		attackBonus: {
			[AttackBonus.PIERCE]: -4,
			[AttackBonus.SLASH]: 103,
			[AttackBonus.CRUSH]: 95,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 105,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 3e3,
		distance: 35,
		combatType: CombatType.MELEE,
	},
	{
		type: AxeItem.Mistletoe,
		textureId: "mistletoegreataxe",
		name: "Mistletoe Great Axe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: -4,
			[AttackBonus.SLASH]: 103,
			[AttackBonus.CRUSH]: 95,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 105,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 3e3,
		distance: 35,
		combatType: CombatType.MELEE,
	},
	{
		type: SpecialItem.Excalibur,
		textureId: "excalibur",
		name: "Excalibur",
		category: "equipment",
		fungible: !0,
		limit: 1,
		duelArenaOnly: !0,
		equipmentSlot: "weapon",
		value: 3e3,
		excludeFromTrade: !0,
		combatType: CombatType.MELEE,
		isTwoHanded: !0,
	},
	{
		type: SwordItem.Silver,
		textureId: "silversword",
		name: "Silver Sword",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 1,
		weight: 4,
		weaponStyles: swordWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 19,
			[AttackBonus.SLASH]: 27,
			[AttackBonus.CRUSH]: -2,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 27,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		combatType: CombatType.MELEE,
	},
	{
		type: FalchionItem.Iron,
		textureId: "falchion_iron",
		name: "Iron Falchion",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 300,
		weight: 2.7,
		weaponStyles: falchionWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 19,
			[AttackBonus.SLASH]: 19,
			[AttackBonus.CRUSH]: 19,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 17,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		combatType: CombatType.MELEE,
		tier: 2,
		description:
			"A falchion made of iron, moderate attack and strength bonuses. Quick attacks.",
		baseFocusValue: 24,
		crafting: {
			time_per_unit: 1e3,
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: FalchionItem.Steel,
		textureId: "falchion_steel",
		name: "Steel Falchion",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 400,
		weight: 3.2,
		weaponStyles: falchionWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 39,
			[AttackBonus.SLASH]: 39,
			[AttackBonus.CRUSH]: 39,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 48,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		combatType: CombatType.MELEE,
		tier: 3,
		description:
			"A falchion made of steel, substantial attack and strength bonuses. Quick attacks.",
		hasSpecial: !0,
		specialAttackDescription:
			"Piercing Thrust: Dash 2 tiles through target, guaranteed hit",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: FalchionItem.Adamantine,
		textureId: "falchion_adamantine",
		name: "Adamantine Falchion",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 600,
		weight: 3.7,
		weaponStyles: falchionWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 48,
			[AttackBonus.SLASH]: 48,
			[AttackBonus.CRUSH]: 48,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 63,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		combatType: CombatType.MELEE,
		tier: 4,
		description:
			"A falchion made of adamantine, exceptional attack and strength bonuses. Quick attacks.",
		hasSpecial: !0,
		specialAttackDescription:
			"Piercing Thrust: Dash 3 tiles through target, guaranteed hit",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: FalchionItem.AdamantineMasterwork,
		textureId: "falchion_adamantine",
		name: "Adamantine Falchion (Masterwork)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 600,
		weight: 3.7,
		weaponStyles: falchionWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 57,
			[AttackBonus.SLASH]: 57,
			[AttackBonus.CRUSH]: 57,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 82,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		combatType: CombatType.MELEE,
		tier: 5,
		description:
			"A masterwork falchion made of adamantine, exceptional attack and strength bonuses. Quick attacks.",
		hasSpecial: !0,
		specialAttackDescription:
			"Piercing Thrust: Dash 4 tiles through target, guaranteed hit",
		crafting: {
			materials: [
				{
					type: ShardItem.AdamantineMasterwork,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: GreatswordItem.Iron,
		textureId: "greatsword_iron",
		name: "Iron Greatsword",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 300,
		weight: 3,
		weaponStyles: greatSwordWeaponStyles,
		isTwoHanded: !0,
		attackBonus: {
			[AttackBonus.PIERCE]: 31,
			[AttackBonus.SLASH]: 31,
			[AttackBonus.CRUSH]: 31,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 27,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		tier: 2,
		combatType: CombatType.MELEE,
		description:
			"A greatsword made of iron, moderate attack and strength bonuses. Slow attacks.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: GreatswordItem.Steel,
		textureId: "greatsword_steel",
		name: "Steel Greatsword",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 400,
		weight: 3.5,
		weaponStyles: greatSwordWeaponStyles,
		isTwoHanded: !0,
		attackBonus: {
			[AttackBonus.PIERCE]: 63,
			[AttackBonus.SLASH]: 63,
			[AttackBonus.CRUSH]: 63,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 77,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		tier: 3,
		combatType: CombatType.MELEE,
		description:
			"A greatsword made of steel, substantial attack and strength bonuses. Slow attacks.",
		hasSpecial: !0,
		specialAttackDescription:
			"Pulverizing Strike - Next hit has double accuracy and 110% damage",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: GreatswordItem.Adamantine,
		textureId: "greatsword_adamantine",
		name: "Adamantine Greatsword",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 600,
		weight: 4,
		weaponStyles: greatSwordWeaponStyles,
		isTwoHanded: !0,
		hasSpecial: !0,
		specialAttackDescription:
			"Pulverizing Strike - Next hit has double accuracy and 125% damage",
		attackBonus: {
			[AttackBonus.PIERCE]: 77,
			[AttackBonus.SLASH]: 77,
			[AttackBonus.CRUSH]: 77,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 100,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		tier: 4,
		combatType: CombatType.MELEE,
		description:
			"A greatsword made of adamantine, exceptional attack and strength bonuses. Slow attacks.",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: GreatswordItem.AdamantineMasterwork,
		textureId: "greatsword_adamantine",
		name: "Adamantine Greatsword (Masterwork)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 600,
		weight: 4,
		weaponStyles: greatSwordWeaponStyles,
		isTwoHanded: !0,
		hasSpecial: !0,
		specialAttackDescription:
			"Pulverizing Strike - Next hit has double accuracy and 137% damage",
		attackBonus: {
			[AttackBonus.PIERCE]: 91,
			[AttackBonus.SLASH]: 91,
			[AttackBonus.CRUSH]: 91,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 130,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 2,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		tier: 5,
		combatType: CombatType.MELEE,
		description:
			"A masterwork greatsword made of adamantine, exceptional attack and strength bonuses. Slow attacks.",
		crafting: {
			materials: [
				{
					type: ShardItem.AdamantineMasterwork,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: StaffItem.Standard,
		textureId: "staff",
		name: "Staff",
		value: 200,
		weight: 2,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: staffWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 14,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 5,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 2,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 6,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 300,
		tier: 2,
		combatType: CombatType.MAGIC,
		description: "A basic staff imbued with magical power.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Log,
					quantity: 20,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 10,
				},
			],
		},
		repairMaterials: [
			{
				name: GemstoneItem.Sapphire,
				quantity: 1,
			},
		],
	},
	{
		type: StaffItem.Corrupted,
		textureId: "corruptedstaff",
		name: "Corrupted Staff",
		value: 600,
		weight: 4,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: staffWeaponStyles,
		hasSpecial: !0,
		specialAttackDescription: "Special attack: Mind Control",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 32,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 10,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 2,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 12,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 300,
		tier: 3,
		combatType: CombatType.MAGIC,
		description: "A staff of untold power.",
		crafting: {
			materials: [
				{
					type: GemstoneItem.Diamond,
					quantity: 1,
				},
				{
					type: MaterialItem.Verdantcloth,
					quantity: 3,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 15,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 65,
				},
			],
		},
		repairMaterials: [
			{
				name: GemstoneItem.Diamond,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 80,
			},
		],
	},
	{
		type: StaffItem.Mystic,
		textureId: StaffItem.Mystic,
		name: "Archemage's Staff",
		value: 800,
		weight: 5,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: staffWeaponStyles,
		hasSpecial: !0,
		specialAttackDescription:
			"Overcharge: Increases cast speed by 50% for 5 seconds",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 42,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 12,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 2,
			[DefenseBonus.SLASH]: 3,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 18,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 300,
		tier: 4,
		combatType: CombatType.MAGIC,
		description: "A staff of exceptional power.",
		crafting: {
			materials: [
				{
					type: GemstoneItem.Diamond,
					quantity: 3,
				},
				{
					type: MaterialItem.Eldercloth,
					quantity: 3,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 15,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: GemstoneItem.Diamond,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 90,
			},
		],
	},
	{
		type: CrossbowItem.Crossbow,
		textureId: "crossbow",
		name: "Crossbow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weight: 2,
		weaponStyles: crossbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 78,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 300,
		tier: 3,
		combatType: CombatType.RANGED,
		value: 55,
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 2,
			},
		],
		description: "A crossbow of fine work.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Gleamcloth,
					quantity: 3,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 20,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 35,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 40,
			},
		],
	},
	{
		type: RepeaterItem.CultistsRepeater,
		textureId: RepeaterItem.CultistsRepeater,
		name: "Cultist's Repeater",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weight: 2.5,
		weaponStyles: crossbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 118,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		hasSpecial: !0,
		specialAttackDescription:
			"Dark Sigil: next attack has 100% increased accuracy and guarantees additional effects of bolts used",
		distance: 300,
		tier: 5,
		combatType: CombatType.RANGED,
		value: 1100,
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 2,
			},
		],
		description: "Rapid-fire crossbow of dark energy.",
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 90,
			},
		],
	},
	{
		type: "raw_kelp",
		name: "Raw Kelp",
		description: "Raw kelp, can be used in cooking",
		value: 3,
		weight: 0.3,
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		limit: 1e3,
	},
	{
		type: RawFishItem.Trout,
		name: "Raw Trout",
		description: "Raw Trout, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 3,
		weight: 0.45,
		limit: 1e3,
	},
	{
		type: RawFishItem.Cod,
		name: "Raw Cod",
		description: "Raw Cod, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 6,
		weight: 0.6,
		limit: 1e3,
	},
	{
		type: RawFishItem.Carp,
		name: "Raw Carp",
		description: "Raw Carp, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 12,
		weight: 0.75,
		limit: 1e3,
	},
	{
		type: RawFishItem.Lobster,
		name: "Raw Lobster",
		description: "Raw Lobster, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 50,
		weight: 0.9,
		limit: 1e3,
	},
	{
		type: RawFishItem.Eel,
		name: "Raw Spotted Eel",
		description: "Raw Eel, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 100,
		weight: 1.1,
		limit: 1e3,
	},
	{
		type: RawFishItem.Rockfish,
		name: "Raw Rockfish",
		description: "Raw Rockfish, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 200,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.Bread,
		name: "Loaf of Bread",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 30 HP instantly",
		value: 5,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MealItem.GrilledTrout,
		name: "Grilled Trout",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 30 HP instantly",
		cooking: {
			materials: [
				{
					type: RawFishItem.Trout,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 1,
				},
			],
		},
		value: 7,
		weight: 0.3,
		limit: 1e3,
		baseFocusValue: 24,
	},
	{
		type: MealItem.GrilledCod,
		name: "Grilled Cod",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 50 HP instantly",
		cooking: {
			materials: [
				{
					type: RawFishItem.Cod,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 30,
				},
			],
		},
		value: 12,
		weight: 0.45,
		limit: 1e3,
	},
	{
		type: MealItem.GrilledCarp,
		name: "Grilled Carp",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 110 HP instantly",
		cooking: {
			materials: [
				{
					type: RawFishItem.Carp,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 60,
				},
			],
		},
		value: 16,
		weight: 1.15,
		limit: 1e3,
	},
	{
		type: MealItem.GrilledLobster,
		name: "Grilled Lobster",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 150 HP instantly",
		cooking: {
			materials: [
				{
					type: RawFishItem.Lobster,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 70,
				},
			],
		},
		value: 75,
		weight: 1.5,
		limit: 1e3,
	},
	{
		type: MealItem.GrilledEel,
		name: "Grilled Eel",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 200 HP instantly",
		cooking: {
			materials: [
				{
					type: RawFishItem.Eel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 80,
				},
			],
		},
		value: 150,
		weight: 1.1,
		limit: 1e3,
	},
	{
		type: MealItem.GrilledRockfish,
		name: "Grilled Rockfish",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 240 HP instantly",
		cooking: {
			materials: [
				{
					type: RawFishItem.Rockfish,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 90,
				},
			],
		},
		value: 250,
		weight: 1.1,
		limit: 1e3,
	},
	{
		type: PotionItem.Beer,
		name: "Beer",
		description: "Used to get drunk",
		category: "consumable",
		fungible: !0,
		equipmentSlot: null,
		consumableType: "potion",
		value: 1,
		weight: 0.5,
		limit: 1,
	},
	{
		type: MagicChargeItem.Fire,
		textureId: "fire_charge",
		description: "Used to cast magic spells",
		name: "Fire Charge",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 1,
		weight: 0.002,
		limit: 1e3,
	},
	{
		type: MagicChargeItem.Frost,
		textureId: "frost_charge",
		description: "Used to cast magic spells",
		name: "Frost Charge",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 1,
		weight: 0.004,
		limit: 1e3,
	},
	{
		type: MagicChargeItem.Wind,
		textureId: "wind_charge",
		description: "Used to cast magic spells",
		name: "Wind Charge",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 1,
		weight: 0.001,
		limit: 1e3,
	},
	{
		type: MagicChargeItem.Earth,
		textureId: "earth_charge",
		description: "Used to cast magic spells",
		name: "Earth Charge",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 1,
		weight: 0.002,
		limit: 1e3,
	},
	{
		type: MagicChargeItem.Void,
		description: "Used to cast magic spells",
		textureId: "void_charge",
		name: "Void Charge",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 1,
		weight: 0.005,
		limit: 1e3,
	},
	{
		type: DaggerItem.Bronze,
		textureId: "dagger_bronze",
		name: "Bronze Dagger",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: daggerWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 10,
			[AttackBonus.SLASH]: 10,
			[AttackBonus.CRUSH]: 10,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 8,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 1,
		combatType: CombatType.MELEE,
		value: 30,
		weight: 2,
		description: "A dagger made of bronze, minor attack bonuses, very fast.",
		crafting: {
			materials: [
				{
					type: ShardItem.Bronze,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Bronze,
				quantity: 2,
			},
		],
	},
	{
		type: DaggerItem.Iron,
		textureId: "dagger_iron",
		name: "Iron Dagger",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: daggerWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 15,
			[AttackBonus.SLASH]: 15,
			[AttackBonus.CRUSH]: 15,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 13,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 1,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 2,
		combatType: CombatType.MELEE,
		value: 300,
		weight: 2.5,
		description: "A dagger made of iron, moderate attack bonuses, very fast.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: DaggerItem.Steel,
		textureId: "dagger_steel",
		name: "Steel Dagger",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: daggerWeaponStyles,
		hasSpecial: !0,
		specialAttackDescription:
			"Puncture: Deal two hits in quick succession, with 15% increased accuracy and damage",
		attackBonus: {
			[AttackBonus.PIERCE]: 30,
			[AttackBonus.SLASH]: 30,
			[AttackBonus.CRUSH]: 30,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 37,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 1,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 3,
		combatType: CombatType.MELEE,
		value: 400,
		weight: 3,
		description:
			"A dagger made of steel, substantial attack bonuses, very fast.",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: DaggerItem.Adamantine,
		textureId: "dagger_adamantine",
		name: "Adamantine Dagger",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: daggerWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 37,
			[AttackBonus.SLASH]: 37,
			[AttackBonus.CRUSH]: 37,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 48,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 1,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 4,
		combatType: CombatType.MELEE,
		hasSpecial: !0,
		specialAttackDescription:
			"Puncture: Deal two hits in quick succession, with 15% increased accuracy and damage",
		value: 600,
		weight: 3.5,
		description:
			"A dagger made of adamantine, exceptional attack bonuses, very fast.",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: DaggerItem.Dragonsteel,
		textureId: "dragonsteeldagger",
		name: "Dragonsteel Dagger",
		weaponStyles: daggerWeaponStyles,
		category: "equipment",
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 44,
			[AttackBonus.SLASH]: 44,
			[AttackBonus.CRUSH]: 44,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 63,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 1,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		tier: 5,
		distance: 35,
		combatType: CombatType.MELEE,
		value: 1100,
		weight: 3.5,
		hasSpecial: !0,
		specialAttackDescription:
			"Puncture: Deal two hits in quick succession, with 15% increased accuracy and damage",
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: RockItem.Standard,
		textureId: "rock",
		name: "Giant Rock",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: rockWeaponStyles,
		isTwoHanded: !0,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 6,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 4,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 1,
		combatType: CombatType.MELEE,
		value: 1,
		weight: 3,
	},
	{
		type: ArenaDaggerItem.Dragonsteel,
		textureId: "dragonsteeldagger",
		name: "Arena Dragonsteel Dagger",
		category: "equipment",
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 40,
			[AttackBonus.SLASH]: 25,
			[AttackBonus.CRUSH]: -4,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 40,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		distance: 35,
		combatType: CombatType.MELEE,
		value: 25,
		hasSpecial: !0,
		specialAttackDescription: "Special attack: Puncture",
	},
	{
		type: ArenaFalchionItem.Dragonsteel,
		textureId: "dragonsteel_falchion",
		name: "Dragonsteel Falchion",
		category: "equipment",
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: -15,
			[AttackBonus.SLASH]: -15,
			[AttackBonus.CRUSH]: -15,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		distance: 35,
		combatType: CombatType.MELEE,
		value: 25,
		hasSpecial: !1,
	},
	{
		type: ArenaDaggerItem.Poisoned,
		textureId: "poisoneddagger",
		name: "Poisoned Dragonsteel Dagger",
		category: "equipment",
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 40,
			[AttackBonus.SLASH]: 25,
			[AttackBonus.CRUSH]: -4,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 40,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		duelArenaOnly: !0,
		distance: 35,
		combatType: CombatType.MELEE,
		hasSpecial: !0,
		specialAttackDescription:
			"Puncture: Deal two hits in quick succession, with 15% increased accuracy and damage",
		value: 5e3,
	},
	{
		type: SwordItem.Bronze,
		textureId: "bronzesword",
		name: "Bronze Sword",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: swordWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 16,
			[AttackBonus.SLASH]: 16,
			[AttackBonus.CRUSH]: 16,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 12,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 2,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 1,
		combatType: CombatType.MELEE,
		value: 30,
		weight: 2.1,
		description: "A sword made of bronze, minor attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Bronze,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Bronze,
				quantity: 2,
			},
		],
	},
	{
		type: SwordItem.Iron,
		textureId: "ironsword",
		name: "Iron Sword",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: swordWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 23,
			[AttackBonus.SLASH]: 23,
			[AttackBonus.CRUSH]: 23,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 20,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 2,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 2,
		value: 300,
		weight: 2.6,
		combatType: CombatType.MELEE,
		description: "A sword made of iron, moderate attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: SwordItem.Steel,
		textureId: "silversword",
		name: "Steel Sword",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: swordWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 47,
			[AttackBonus.SLASH]: 47,
			[AttackBonus.CRUSH]: 47,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 57,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 2,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 3,
		value: 400,
		weight: 3.1,
		combatType: CombatType.MELEE,
		description: "A sword made of steel, substantial attack bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Piercing Thrust has 120% damage, guaranteed hit and ignores Protection prayers.",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: SwordItem.Adamantine,
		textureId: "adamantinesword",
		name: "Adamantine Sword",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: swordWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 57,
			[AttackBonus.SLASH]: 57,
			[AttackBonus.CRUSH]: 57,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 74,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 2,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 4,
		value: 600,
		weight: 3.6,
		combatType: CombatType.MELEE,
		description: "A sword made of adamantine, exceptional attack bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Piercing Thrust has 140% damage, guaranteed hit and ignores Protection prayers.",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: SwordItem.Dragonsteel,
		textureId: "dragonsteelsword",
		name: "Dragonsteel Sword",
		category: "equipment",
		equipmentSlot: "weapon",
		value: 1100,
		weight: 4.1,
		hasSpecial: !0,
		description: "A sword made of dragonsteel, exceptional attack bonuses.",
		specialAttackDescription:
			"Piercing Thrust has 160% damage, guaranteed hit and ignores Protection prayers.",
		attackBonus: {
			[AttackBonus.PIERCE]: 68,
			[AttackBonus.SLASH]: 68,
			[AttackBonus.CRUSH]: 68,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 97,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 2,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		weaponStyles: swordWeaponStyles,
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 5,
		combatType: CombatType.MELEE,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: CrossbowItem.EnhancedCrossbow,
		textureId: "enhancedcrossbow",
		name: "Reinforced Crossbow",
		description:
			"A crossbow of exceptional work, reinforced with steel braces.",
		value: 1e3,
		weight: 4,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		hasSpecial: !0,
		specialAttackDescription:
			"Trap Launcher: Launch 3 random traps that surround your target",
		weaponStyles: crossbowWeaponStyles,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 96,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 600,
		tier: 4,
		combatType: CombatType.RANGED,
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 3,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 15,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 60,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 50,
			},
		],
	},
	{
		type: HandCannonItem.HandCannon,
		textureId: HandCannonItem.HandCannon,
		name: "Hand Cannon",
		description:
			"A powerful ranged weapon that fires explosive, armor-piercing shots.",
		value: 1100,
		weight: 6,
		category: "equipment",
		fungible: !1,
		hasSpecial: !0,
		specialAttackDescription:
			"Aimed Shot: After a brief channel, gain 50% increased accuracy and 35% increased damage",
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: handCannonStyles,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 118,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		distance: 600,
		tier: 5,
		combatType: CombatType.RANGED,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 85,
			},
		],
	},
	{
		type: ShotItem.HandCannonShot,
		name: "Hand Cannon Shot",
		description: "A heavy cannonball for use with a hand cannon.",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 158,
			[AttackBonus.RANGED]: 0,
		},
		fungible: !0,
		tier: 3,
		value: 1,
		weight: 0.002,
		limit: 1e3,
	},
	{
		type: MaterialItem.EmptyVial,
		name: "Empty Vial",
		description: "Used to make potions",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		tier: 1,
		value: 5,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: OreItem.Copper,
		name: "Copper Ore",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		tier: 1,
		value: 5,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: OreItem.Tin,
		name: "Tin Ore",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		tier: 1,
		value: 5,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: OreItem.Iron,
		name: "Iron Ore",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		tier: 2,
		value: 15,
		weight: 0.6,
		limit: 1e3,
	},
	{
		type: OreItem.Coal,
		name: "Coal Ore",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		tier: 3,
		value: 100,
		weight: 0.8,
		limit: 1e3,
	},
	{
		type: OreItem.Adamantine,
		name: "Adamantine Ore",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		tier: 4,
		value: 175,
		weight: 1,
		limit: 1e3,
	},
	{
		type: OreItem.Obsidian,
		name: "Obsidian Ore",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		tier: 5,
		value: 300,
		weight: 1.5,
		limit: 1e3,
	},
	{
		type: OreItem.Luminescent,
		name: "Uncharged Essence",
		description: "Used to make magic charges using magic altars.",
		category: "material",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 1,
		weight: 0.2,
	},
	{
		type: BarItem.Bronze,
		name: "Bronze Bar",
		description: "Used in various crafting recipes",
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		smelting: {
			type: "bar",
			materials: [
				{
					type: OreItem.Copper,
					quantity: 2,
				},
				{
					type: OreItem.Tin,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
			chanceOfSuccess: 1,
		},
		tier: 1,
		value: 10,
		weight: 0.25,
		limit: 1e3,
		baseFocusValue: 24,
	},
	{
		type: BarItem.Iron,
		name: "Iron Bar",
		description: "Used in various crafting recipes",
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		smelting: {
			type: "bar",
			materials: [
				{
					type: OreItem.Iron,
					quantity: 3,
				},
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 40,
				},
			],
			chanceOfSuccess: 1,
		},
		tier: 2,
		value: 15,
		weight: 0.5,
		limit: 1e3,
	},
	{
		type: BarItem.Steel,
		name: "Steel Bar",
		description: "Used in various crafting recipes",
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		smelting: {
			type: "bar",
			materials: [
				{
					type: OreItem.Coal,
					quantity: 3,
				},
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
			chanceOfSuccess: 0.8,
		},
		tier: 3,
		value: 20,
		weight: 0.75,
		limit: 1e3,
	},
	{
		type: BarItem.Adamantine,
		name: "Adamantine Bar",
		description: "Used in various crafting recipes",
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		smelting: {
			type: "bar",
			materials: [
				{
					type: OreItem.Adamantine,
					quantity: 3,
				},
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
			chanceOfSuccess: 1,
		},
		tier: 4,
		value: 30,
		weight: 1,
		limit: 1e3,
	},
	{
		type: BarItem.Obsidian,
		name: "Obsidian Bar",
		description: "Used in various crafting recipes",
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		smelting: {
			type: "bar",
			materials: [
				{
					type: OreItem.Obsidian,
					quantity: 3,
				},
				{
					type: BarItem.Adamantine,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 90,
				},
			],
			chanceOfSuccess: 1,
		},
		tier: 5,
		value: 60,
		weight: 1,
		limit: 1e3,
	},
	{
		type: HerbType.Harranhal,
		name: "Harranhal Leaf",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: HerbType.Morellum,
		name: "Morellum",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: HerbType.Phoenix,
		name: "Phoenix Nest",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.RatEar,
		name: "Rat's Ear",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.RatClaw,
		name: "Rat's Claw",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MaterialItem.RatTail,
		name: "Rat's Tail",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.MyrtleSeed,
		name: "Myrtle Seed",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 10,
		weight: 0.2,
	},
	{
		type: MaterialItem.Salt,
		name: "Salt",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.SnailsShell,
		name: "Snail's Shell",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.SpiderEggs,
		name: "Spider Eggs",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.BloodyFinger,
		name: "Bloody Finger",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 150,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MaterialItem.StoneShard,
		name: "Stone Shard",
		description: "Used to craft stoneplate armor",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 50,
		weight: 0.5,
		limit: 1e3,
	},
	{
		type: MaterialItem.EnchantedStoneShard,
		name: "Enchanted Stone Shard",
		description: "Used to craft reinforced stoneplate armor",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 100,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MaterialItem.EarthWorm,
		name: "Earthworm",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MaterialItem.MothWing,
		name: "Moth Wing",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 30,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: MaterialItem.MushroomCap,
		name: "Mushroom Cap",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 20,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.TreeSap,
		name: "Tree Sap",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 20,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MaterialItem.VampireFang,
		name: "Vampire Fang",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 150,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MaterialItem.ZombieBrain,
		name: "Undead Brain",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 200,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MaterialItem.AngelDust,
		name: "Angel Dust",
		description: "Used in various crafting recipes",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 150,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: PotionItem.Rage,
		name: "Rage Potion",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description: "Increases attack and strength levels",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: HerbType.Phoenix,
					quantity: 1,
				},
				{
					type: MaterialItem.RatClaw,
					quantity: 1,
				},
				{
					type: MaterialItem.MushroomCap,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 1,
				},
			],
			boost_type: ["strength", "accuracy"],
			boost_effect: 1.25,
		},
		value: 100,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.WeakRage,
		name: "Weak Rage Potion",
		description: "Increases attack and strength levels slightly",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 50,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.SuperRage,
		name: "Super Rage Potion",
		description: "Increases attack and strength levels exceptionally",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 250,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.Antipoison,
		name: "Antipoison Potion",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description: "Cures poison and provides immunity for 3 minutes",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: MaterialItem.AngelDust,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 35,
				},
			],
			boost_type: ["defense"],
			boost_effect: 1.25,
		},
		value: 100,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: PotionItem.Defence,
		name: "Defence Potion",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description: "Temporarily raises Defence levels",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: HerbType.Phoenix,
					quantity: 1,
				},
				{
					type: MaterialItem.TreeSap,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 30,
				},
			],
			boost_type: ["defense"],
			boost_effect: 1.08,
		},
		value: 100,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.WeakDefence,
		name: "Weak Defence Potion",
		description: "Temporarily raises Defence levels slightly",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 50,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.SuperDefence,
		name: "Super Defence Potion",
		description: "Temporarily raises Defence levels exceptionally",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 250,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.RunEnergy,
		name: "Run Energy Potion",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description: "Restores run energy.",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: HerbType.Morellum,
					quantity: 1,
				},
				{
					type: MaterialItem.RatClaw,
					quantity: 1,
				},
				{
					type: MaterialItem.RatEar,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 55,
				},
			],
			boost_type: ["speed"],
			boost_effect: 1.2,
		},
		value: 100,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: PotionItem.WeakRunEnergy,
		name: "Weak Run Energy Potion",
		description: "Restores a slight amount of run energy",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 50,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: PotionItem.SuperRunEnergy,
		name: "Super Run Energy Potion",
		description: "Restores an exceptional amount of run energy",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 250,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: PotionItem.Farsight,
		name: "Farsight Potion",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description: "Temporarily boosts ranged levels",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: HerbType.Morellum,
					quantity: 1,
				},
				{
					type: MaterialItem.SpiderEggs,
					quantity: 1,
				},
				{
					type: MaterialItem.RatTail,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 25,
				},
			],
			boost_type: ["ranged"],
			boost_effect: 1.2,
		},
		value: 100,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: PotionItem.WeakFarsight,
		name: "Weak Farsight Potion",
		description: "Temporarily boosts ranged levels slightly",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 50,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: PotionItem.SuperFarsight,
		name: "Super Farsight Potion",
		description: "Temporarily boosts ranged levels exceptionally",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 250,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: PotionItem.WeakSorcerersBrew,
		name: "Weak Sorcerer's Brew",
		description: "Temporarily boosts magic levels slightly",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 50,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.SorcerersBrew,
		name: "Sorcerer's Brew",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description: "Temporarily boosts magic levels",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: HerbType.Harranhal,
					quantity: 1,
				},
				{
					type: MaterialItem.RatEar,
					quantity: 1,
				},
				{
					type: MaterialItem.MothWing,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 45,
				},
			],
			boost_type: [],
			boost_effect: 1,
		},
		value: 100,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.SuperSorcerersBrew,
		name: "Super Sorcerer's Brew",
		description: "Temporarily boosts magic levels exceptionally",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		value: 250,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: PotionItem.Prayer,
		name: "Prayer Potion",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description:
			"A potion that restores a portion of your Prayer points when consumed.",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: HerbType.Phoenix,
					quantity: 1,
				},
				{
					type: MaterialItem.AngelDust,
					quantity: 1,
				},
				{
					type: MaterialItem.SnailsShell,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 40,
				},
			],
			boost_type: ["defense"],
			boost_effect: 1.05,
		},
		value: 100,
		weight: 0.5,
		limit: 1e3,
	},
	{
		type: PotionItem.RestorationBrew,
		name: "Restoration Brew",
		category: "consumable",
		equipmentSlot: null,
		fungible: !0,
		consumableType: "potion",
		description:
			"Instant HP Healing, Boosted HP Levels, and a small about of Prayer points.",
		alchemy: {
			materials: [
				{
					type: MaterialItem.EmptyVial,
					quantity: 1,
				},
				{
					type: HerbType.Phoenix,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 3,
				},
				{
					type: MaterialItem.ZombieBrain,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Alchemy,
					level: 90,
				},
			],
			boost_type: ["defense"],
			boost_effect: 1.05,
		},
		value: 350,
		weight: 1.5,
		limit: 1e3,
	},
	{
		type: HatItem.RudimentarySlayerMask,
		name: "Rudimentary Slayer Mask",
		description:
			"Increases all damage dealt to monsters of your current slayer task by 4%.",
		category: "equipment",
		equipmentSlot: "head",
		fungible: !1,
		excludeFromTrade: !0,
		limit: 1,
		value: 0,
		tier: 1,
		weight: 0.75,
	},
	{
		type: HatItem.SlayerMask,
		name: "Slayer Mask",
		description:
			"Increases all damage dealt to monsters of your current slayer task by 12%.",
		category: "equipment",
		equipmentSlot: "head",
		fungible: !1,
		limit: 1,
		excludeFromTrade: !0,
		value: 100,
		tier: 2,
		weight: 1.25,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Slayer,
				level: 60,
			},
			{
				skill: SkillType$1.Defense,
				level: 40,
			},
		],
	},
	{
		type: MeleeHelmItem.Bronze,
		textureId: "elitemeleebronze_helm",
		name: "Bronze Full Helm",
		description:
			"Provides slight defenses against piercing and slashing attacks",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -6,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 12,
			[DefenseBonus.SLASH]: 9,
			[DefenseBonus.CRUSH]: 7,
			[DefenseBonus.MAGIC]: -1,
			[DefenseBonus.RANGED]: 9,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "helm",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		isFullHelm: !0,
		value: 100,
		tier: 1,
		weight: 2.5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 10,
			},
		],
	},
	{
		type: MeleeHelmItem.Iron,
		textureId: "elitemeleeiron_helm",
		name: "Iron Full Helm",
		description:
			"Provides great defenses against piercing and slashing attacks",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -11,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 16,
			[DefenseBonus.SLASH]: 13,
			[DefenseBonus.CRUSH]: 11,
			[DefenseBonus.MAGIC]: -1,
			[DefenseBonus.RANGED]: 11,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "helm",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
		},
		isFullHelm: !0,
		value: 150,
		tier: 2,
		weight: 3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 40,
			},
		],
	},
	{
		type: MeleeHelmItem.Steel,
		textureId: "elitemeleesteel_helm",
		name: "Steel Full Helm",
		description:
			"Provides immense defenses against piercing and slashing attacks",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -15,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 32,
			[DefenseBonus.SLASH]: 26,
			[DefenseBonus.CRUSH]: 19,
			[DefenseBonus.MAGIC]: -1,
			[DefenseBonus.RANGED]: 23,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "helm",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		isFullHelm: !0,
		value: 200,
		tier: 3,
		weight: 3.5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 60,
			},
		],
	},
	{
		type: MeleeHelmItem.Adamantine,
		textureId: "elitemeleeadamantine_helm",
		name: "Adamantine Full Helm",
		description:
			"Provides exceptional defenses against piercing and slashing attacks",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -18,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 40,
			[DefenseBonus.SLASH]: 32,
			[DefenseBonus.CRUSH]: 24,
			[DefenseBonus.MAGIC]: -1,
			[DefenseBonus.RANGED]: 28,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "helm",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
		},
		isFullHelm: !0,
		value: 300,
		tier: 4,
		weight: 4,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 80,
			},
		],
	},
	{
		type: MeleeHelmItem.Dragonsteel,
		textureId: "dragonsteelhelm",
		name: "Dragonsteel Helm",
		description:
			"Helm made out of dragonsteel that primarily focuses on boosting offensive melee capabilities",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 6,
			[AttackBonus.SLASH]: 8,
			[AttackBonus.CRUSH]: 6,
			[AttackBonus.MAGIC]: -3,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 14,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 12,
			[DefenseBonus.SLASH]: 14,
			[DefenseBonus.CRUSH]: 11,
			[DefenseBonus.MAGIC]: -1,
			[DefenseBonus.RANGED]: 12,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		isFullHelm: !0,
		value: 1200,
		tier: 4,
		weight: 1,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Strength,
				level: 95,
			},
		],
	},
	{
		type: MeleeArmorItem.Bronze,
		textureId: "elitemeleebronze_armor",
		name: "Bronze Plate Armor",
		description:
			"Provides slight defenses against piercing and slashing attacks",
		category: "equipment",
		equipmentSlot: "body",
		tier: 1,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 50,
			[DefenseBonus.SLASH]: 40,
			[DefenseBonus.CRUSH]: 30,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 35,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 25,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Bronze,
				quantity: 1,
			},
		],
		value: 200,
		weight: 5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 10,
			},
		],
	},
	{
		type: MeleeArmorItem.Iron,
		textureId: "elitemeleeiron_armor",
		name: "Iron Plate Armor",
		description:
			"Provides great defenses against piercing and slashing attacks",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -65,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 71,
			[DefenseBonus.SLASH]: 57,
			[DefenseBonus.CRUSH]: 42,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 50,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 25,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 1,
			},
		],
		value: 300,
		tier: 2,
		weight: 7,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 40,
			},
		],
	},
	{
		type: MeleeArmorItem.Steel,
		textureId: "elitemeleesteel_armor",
		name: "Steel Plate Armor",
		description:
			"Provides immense defenses against piercing and slashing attacks",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -85,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 148,
			[DefenseBonus.SLASH]: 119,
			[DefenseBonus.CRUSH]: 89,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 104,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 25,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 1,
			},
		],
		value: 400,
		tier: 3,
		weight: 9,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 60,
			},
		],
	},
	{
		type: MeleeArmorItem.Adamantine,
		textureId: "elitemeleeadamantine_armor",
		name: "Adamantine Plate Armor",
		description:
			"Provides exceptional defenses against piercing and slashing attacks",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -115,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 178,
			[DefenseBonus.SLASH]: 143,
			[DefenseBonus.CRUSH]: 107,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 125,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 25,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
		},
		value: 600,
		tier: 4,
		weight: 11,
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 80,
			},
		],
	},
	{
		type: MeleeArmorItem.Dragonsteel,
		textureId: "dragonsteel_armor",
		name: "Dragonsteel Armor",
		description:
			"Armor made out of dragonsteel that primarily focuses on boosting offensive melee capabilities",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -41,
			[AttackBonus.RANGED]: -16,
			[AttackBonus.MELEE_STRENGTH]: 26,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 55,
			[DefenseBonus.SLASH]: 52,
			[DefenseBonus.CRUSH]: 38,
			[DefenseBonus.MAGIC]: -15,
			[DefenseBonus.RANGED]: 54,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 2400,
		tier: 4,
		weight: 4,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Strength,
				level: 95,
			},
		],
	},
	{
		type: ChainArmorItem.Bronze,
		textureId: ChainArmorItem.Bronze,
		name: "Bronze Chain Armor",
		description: "Provides slight defenses against crushing attacks",
		category: "equipment",
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 30,
			[DefenseBonus.SLASH]: 36,
			[DefenseBonus.CRUSH]: 50,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 35,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 20,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Bronze,
				quantity: 1,
			},
		],
		value: 200,
		tier: 1,
		weight: 4,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 10,
			},
		],
	},
	{
		type: ChainArmorItem.Iron,
		textureId: ChainArmorItem.Iron,
		name: "Iron Chain Armor",
		description: "Provides great defenses against crushing attacks",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 42,
			[DefenseBonus.SLASH]: 51,
			[DefenseBonus.CRUSH]: 71,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 50,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 20,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 4,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 60,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 1,
			},
		],
		value: 300,
		tier: 2,
		weight: 6,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 40,
			},
		],
	},
	{
		type: ChainArmorItem.Steel,
		textureId: ChainArmorItem.Steel,
		name: "Steel Chain Armor",
		description: "Provides immense defenses against crushing attacks",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 89,
			[DefenseBonus.SLASH]: 107,
			[DefenseBonus.CRUSH]: 148,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 104,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 20,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 4,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 1,
			},
		],
		value: 400,
		tier: 3,
		weight: 8,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 60,
			},
		],
	},
	{
		type: ChainArmorItem.Adamantine,
		textureId: ChainArmorItem.Adamantine,
		name: "Adamantine Chain Armor",
		description: "Provides exceptional defenses against crushing attacks",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 107,
			[DefenseBonus.SLASH]: 128,
			[DefenseBonus.CRUSH]: 178,
			[DefenseBonus.MAGIC]: -10,
			[DefenseBonus.RANGED]: 125,
			[DefenseBonus.TENACITY]: -25,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 20,
			[DefenseBonus.BURN_RESIST]: -20,
		},
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 4,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
		},
		value: 600,
		tier: 4,
		weight: 10,
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 80,
			},
		],
	},
	{
		type: BoltItem.Bronze,
		name: "Bronze Crossbow Bolt",
		description:
			"Used in combination with a crossbow. Boosts ranged strength slightly",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 28,
			[AttackBonus.RANGED]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		tier: 1,
		value: 1,
		weight: 0.002,
		smithing: {
			type: "bolt",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 1,
			},
		],
	},
	{
		type: BoltItem.Iron,
		name: "Iron Crossbow Bolt",
		description:
			"Used in combination with a crossbow. Boosts ranged strength greatly",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 46,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		smithing: {
			type: "bolt",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 40,
				},
			],
		},
		tier: 2,
		value: 2,
		weight: 0.003,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 40,
			},
		],
	},
	{
		type: BoltItem.Steel,
		name: "Steel Crossbow Bolt",
		description:
			"Used in combination with a crossbow. Boosts ranged strength immensely",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 66,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		smithing: {
			type: "bolt",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		tier: 3,
		value: 3,
		weight: 0.005,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 60,
			},
		],
	},
	{
		type: BoltItem.Adamantine,
		name: "Adamantine Crossbow Bolt",
		description:
			"Used in combination with a crossbow. Boosts ranged strength exceptionally",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 98,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		smithing: {
			type: "bolt",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
		},
		tier: 4,
		value: 10,
		weight: 0.01,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 80,
			},
		],
	},
	{
		type: BoltItem.Dragonsteel,
		name: "Dragonsteel Bolt",
		description:
			"Used in combination with a crossbow. Boosts ranged strength tremendously",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 116,
		},
		fungible: !0,
		tier: 5,
		value: 15,
		weight: 0.01,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 95,
			},
		],
	},
	{
		type: EnchantedBoltItem.DragonsteelE,
		name: "Dragonsteel Bolt (Dragon's Breath)",
		description: "Chance to trigger Dragon's Breath (onhit dmg)",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 116,
		},
		fungible: !0,
		tier: 5,
		value: 20,
		weight: 0.01,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 95,
			},
		],
	},
	{
		type: EnchantedBoltItem.DragonsteelI,
		name: "Dragonsteel Bolt (Piercing)",
		description: "Chance to trigger Armor Piercing (gtd hit)",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 116,
		},
		fungible: !0,
		tier: 5,
		value: 20,
		weight: 0.01,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 95,
			},
		],
	},
	{
		type: ArrowItem.Bronze,
		name: "Bronze Arrow",
		description:
			"Used in combination with a bow. Boosts ranged strength slightly.",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 14,
			[AttackBonus.RANGED]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		smithing: {
			type: "arrow",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
		fungible: !0,
		tier: 1,
		value: 1,
		weight: 0.001,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 1,
			},
		],
	},
	{
		type: ArrowItem.Iron,
		name: "Iron Arrow",
		description:
			"Used in combination with a bow. Boosts ranged strength greatly.",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 34,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		smithing: {
			type: "arrow",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 40,
				},
			],
		},
		fungible: !0,
		tier: 2,
		value: 2,
		weight: 0.002,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 40,
			},
		],
	},
	{
		type: ArrowItem.Steel,
		name: "Steel Arrow",
		description:
			"Used in combination with a bow. Boosts ranged strength immensely",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 58,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		smithing: {
			type: "arrow",
			materials: [
				{
					type: BarItem.Steel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
		fungible: !0,
		tier: 3,
		value: 3,
		weight: 0.003,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 60,
			},
		],
	},
	{
		type: ArrowItem.Adamantine,
		name: "Adamantine Arrow",
		description:
			"Used in combination with a bow. Boosts ranged strength exceptionally.",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 68,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		smithing: {
			type: "arrow",
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 80,
				},
			],
		},
		fungible: !0,
		tier: 4,
		value: 10,
		weight: 0.005,
		limit: 1e3,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 80,
			},
		],
	},
	{
		type: CurrencyItem.Gold,
		name: "Silver Pieces",
		description: "Pieces of shiny silver.  Never lost on death.",
		value: 1,
		category: "currency",
		limit: 2147483647,
		equipmentSlot: null,
		fungible: !0,
		excludeFromTrade: !1,
	},
	{
		type: CurrencyItem.ArenaToken,
		name: "Arena Token",
		value: 1,
		category: "currency",
		limit: 2147483647,
		equipmentSlot: null,
		fungible: !0,
		duelArenaOnly: !0,
	},
	{
		type: MaterialItem.Log,
		name: "Logs",
		description: "Used in various crafting recipes",
		weight: 0.1,
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		value: 2,
		limit: 1e3,
	},
	{
		type: MaterialItem.OakLog,
		name: "Oak Logs",
		description: "Used in various crafting recipes",
		weight: 0.25,
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		value: 5,
		limit: 1e3,
	},
	{
		type: MaterialItem.MystbarkLog,
		name: "Mystbark Logs",
		description: "Used in various crafting recipes",
		weight: 0.5,
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		value: 20,
		limit: 1e3,
	},
	{
		type: MaterialItem.Plank,
		name: "Plank",
		description: "Used in crafting and repairing",
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		value: 1,
		weight: 0.5,
		limit: 1e3,
	},
	{
		type: NailItem.Bronze,
		name: "Bronze Nails",
		description: "Used in crafting and repairing",
		equipmentSlot: null,
		category: "material",
		fungible: !0,
		value: 1,
		limit: 1e3,
		weight: 0.01,
		smithing: {
			type: "nail",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 1,
				},
			],
		},
	},
	{
		type: ClothingItem.Maid,
		textureId: "maiduniform_clothing",
		name: "Maid's Clothing",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.BarAttendant,
		textureId: "barattendant_clothing",
		name: "Bar Attendant Clothing",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.Santa,
		textureId: "santa_clothing",
		name: "Santa Clothing",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.Reindeer,
		textureId: "reindeer_clothing",
		name: "Reindeer Clothing",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.BlackWagerSuit,
		textureId: "blackwagersuits_clothing",
		name: "Fancy Suit (Black)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.RedWagerSuit,
		textureId: "redwagersuits_clothing",
		name: "Gambler's Jacket (Red)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.FancyFemale,
		textureId: "fancycommonerf_clothing",
		name: "Fancy Clothing (f)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.FancyMale,
		textureId: "fancycommonerm_clothing",
		name: "Fancy Clothing (m)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.FroggyRobe,
		textureId: ClothingItem.FroggyRobe,
		name: "Froggy Robe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.RedRobe,
		textureId: ClothingItem.RedRobe,
		name: "Red Robe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.NekoRobe,
		textureId: ClothingItem.NekoRobe,
		name: "Neko Robe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.RegalRobeMale,
		textureId: "highkingsrobes_clothing",
		name: "Regal Robes (m)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.RegalRobePriest,
		textureId: "highpriestrobes_clothing",
		name: "Priest's Robes (m)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.RegalRobeFemale,
		textureId: "highqueensrobes_clothing",
		name: "Regal Robes (f)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.NobleFemale,
		textureId: "noblef_armor",
		name: "Noble's Clothing (f)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.NobleMale,
		textureId: "noblem_armor",
		name: "Noble's Clothing (m)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
	},
	{
		type: ClothingItem.RogueRagFemale,
		textureId: "rougef_clothing",
		name: "Rogue's Rags (f)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
		weight: 1,
	},
	{
		type: ClothingItem.RogueRagMale,
		textureId: "rougem_clothing",
		name: "Rogue's Rags (m)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
		weight: 1,
	},
	{
		type: ClothingItem.RedUnderwear,
		textureId: "sumounderwear_clothing",
		name: "Red Undergarments",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.BathRobe,
		textureId: "whiterobe_clothing",
		name: "Bath Robes",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.GhostlyRobe,
		textureId: ClothingItem.GhostlyRobe,
		name: "Ghostly Robes",
		description:
			"Massively increased tenacity and resistances. Reduced run energy usage.",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 20,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 45,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 60,
			[DefenseBonus.POISON_RESIST]: 50,
			[DefenseBonus.BLEED_RESIST]: 50,
			[DefenseBonus.BURN_RESIST]: 50,
		},
		value: 200,
		tier: 2,
		weight: 0.001,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 50,
			},
		],
	},
	{
		type: ClothingItem.FigLeaf,
		textureId: "figleaf_clothing",
		name: "Fig Leaf",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChristmasItem.SantaHat,
		textureId: ChristmasItem.SantaHat,
		name: "Santa Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: ChristmasItem.SantaHatGold,
		textureId: ChristmasItem.SantaHatGold,
		name: "Golden Santa Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.Elf,
		textureId: HatItem.Elf,
		name: "White Elf Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.ElfGold,
		textureId: HatItem.ElfGold,
		name: "Golden Elf Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.ElfGreen,
		textureId: HatItem.ElfGreen,
		name: "Green Elf Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.Reindeer,
		textureId: HatItem.Reindeer,
		name: "Reindeer Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.Wif,
		textureId: HatItem.Wif,
		name: "Wif Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
		isFullHelm: !0,
	},
	{
		type: HatItem.NekoHoodie,
		textureId: HatItem.NekoHoodie,
		name: "Neko Hoodie",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.TriShades,
		textureId: HatItem.TriShades,
		name: "Tri Shades",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.FroggyCollar,
		textureId: HatItem.FroggyCollar,
		name: "Froggy Collar",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.RedRobeHood,
		textureId: HatItem.RedRobeHood,
		name: "Red Robe Hood",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.WhiteBeret,
		textureId: HatItem.WhiteBeret,
		name: "White Beret",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.NewYear2024Goggles,
		textureId: HatItem.NewYear2024Goggles,
		name: "Rave Goggles",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.MattiGoggles,
		textureId: HatItem.MattiGoggles,
		name: "NYE 2024 Glasses",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.HighKingCrown,
		textureId: "highkingcrown",
		name: "High King's Crown",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1,
	},
	{
		type: HatItem.HighQueenCrown,
		textureId: "highqueencrown",
		name: "High Queen's Crown",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1,
	},
	{
		type: HatItem.RogueHeadbandFemale,
		textureId: "rogueheadbandf",
		name: "Rogue's Headband (f)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1,
		weight: 0.2,
	},
	{
		type: HatItem.RogueHeadbandMale,
		textureId: "rogueheadbandm",
		name: "Rogue's Headband (m)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1,
		weight: 0.2,
	},
	{
		type: HatItem.Eggshell,
		textureId: "eggshellhatm",
		name: "Eggshell Head",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5e3,
		duelArenaOnly: !0,
		isFullHelm: !0,
	},
	{
		type: HatItem.BlueBoater,
		textureId: "fancyhat_blue",
		name: "Blue Boater Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1,
	},
	{
		type: HatItem.BannisterCap,
		textureId: "regalcapa",
		name: "Bannister's Cap",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1,
	},
	{
		type: HatItem.PumpkinHead,
		textureId: "pumpkinhead",
		name: "Pumpkin Head",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e4,
		duelArenaOnly: !0,
		isFullHelm: !0,
	},
	{
		type: HatItem.PurplePartyHat,
		textureId: HatItem.PurplePartyHat,
		name: "Purple Party Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e6,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.BluePartyHat,
		textureId: HatItem.BluePartyHat,
		name: "Blue Party Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e6,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.GreenPartyHat,
		textureId: HatItem.GreenPartyHat,
		name: "Green Party Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e6,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.RedPartyHat,
		textureId: HatItem.RedPartyHat,
		name: "Red Party Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e6,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.WhitePartyHat,
		textureId: HatItem.WhitePartyHat,
		name: "White Party Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e6,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.RedWagerTopHat,
		textureId: "redwagertophat",
		name: "Top Hat (Red)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.BlackWagerTopHat,
		textureId: "blackwagertophat",
		name: "Top Hat (Black)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.PacmoonHead,
		textureId: HatItem.PacmoonHead,
		name: "Pacmoon Head",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		duelArenaOnly: !0,
		excludeFromTrade: !1,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.TintedGoggles,
		textureId: "tintedgoggles",
		name: "Moggles",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5e3,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.ClownMask,
		textureId: "clownmask",
		name: "Clown Mask",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		duelArenaOnly: !0,
		value: 1,
	},
	{
		type: HatItem.DogHoodie,
		textureId: "doghoodie",
		name: "Doggy Hoodie",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: HatItem.CatHoodie,
		textureId: "cathoodie",
		name: "Cat Hoodie",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		duelArenaOnly: !0,
		value: 1,
	},
	{
		type: HatItem.BeeHat,
		textureId: HatItem.BeeHat,
		name: "Bee Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.BlueSnakeHat,
		textureId: HatItem.BlueSnakeHat,
		name: "Snake Hat (Blue)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.GreenSnakeHat,
		textureId: HatItem.GreenSnakeHat,
		name: "Snake Hat (Green)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.CthulhuMask,
		textureId: HatItem.CthulhuMask,
		name: "Cthulhu Mask",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.DrManhattanHat,
		textureId: HatItem.DrManhattanHat,
		name: "Doctor Manhattan Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.GigaChadDetectiveHat,
		textureId: HatItem.GigaChadDetectiveHat,
		name: "GigaChad Detective Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.HeisenbergHat,
		textureId: HatItem.HeisenbergHat,
		name: "Heisenberg Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.SaitamaHead,
		textureId: HatItem.SaitamaHead,
		name: "Saitima Head",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.StreamerHat,
		textureId: HatItem.StreamerHat,
		name: "Streamer Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.WassieBand,
		textureId: HatItem.WassieBand,
		name: "Wassie Band",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.NeoHead,
		textureId: HatItem.NeoHead,
		name: "Neo Head",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 1,
		isFullHelm: !0,
	},
	{
		type: HatItem.BirthdayHat,
		textureId: HatItem.BirthdayHat,
		name: "Birthday Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		duelArenaOnly: !0,
		excludeFromTrade: !0,
		value: 1,
	},
	{
		type: HatItem.NewYear2025ScarfGreen,
		textureId: HatItem.NewYear2025ScarfGreen,
		name: "Definitely Not NYE Scarf",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.NewYear2025ScarfWhite,
		textureId: HatItem.NewYear2025ScarfWhite,
		name: "NYE 2025 (Unused Ingame)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 5,
		duelArenaOnly: !0,
	},
	{
		type: MagicEquipmentItem.WizardHatImitation,
		textureId: "wizardhat_red",
		name: "Wizard's Hat (Imitation)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: MagicEquipmentItem.WizardHat,
		textureId: "wizardhat",
		name: "Wizard's Hat",
		description: "Boosts offensive and defensive magic capabilities.",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 8,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 1,
		tier: 2,
		weight: 1,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 30,
			},
		],
	},
	{
		type: HatItem.MVHQ,
		textureId: "mvhq",
		name: "MVHQ VR Goggles",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		excludeFromTrade: !0,
		destroyOnDeath: !0,
		value: 1,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -15,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 32,
			[DefenseBonus.SLASH]: 26,
			[DefenseBonus.CRUSH]: 19,
			[DefenseBonus.MAGIC]: -1,
			[DefenseBonus.RANGED]: 23,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		isFullHelm: !1,
	},
	{
		type: GemstoneItem.Sapphire,
		name: "Sapphire Gemstone",
		description: "Valuable gemstone, also used in various crafting recipes",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 50,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: GemstoneItem.Emerald,
		name: "Emerald Gemstone",
		description: "Valuable gemstone, also used in various crafting recipes",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 100,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: GemstoneItem.Ruby,
		name: "Ruby Gemstone",
		description: "Valuable gemstone, also used in various crafting recipes",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 200,
		weight: 0.6,
		limit: 1e3,
	},
	{
		type: GemstoneItem.Diamond,
		name: "Diamond Gemstone",
		description: "Valuable gemstone, also used in various crafting recipes",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 400,
		weight: 0.8,
		limit: 1e3,
	},
	{
		type: GemstoneItem.Slayer,
		name: "Slayer Gemstone",
		description: "A gemstone that can be used to imbue Slayer equipment.",
		category: "material",
		equipmentSlot: null,
		excludeFromTrade: !0,
		fungible: !0,
		value: 0,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MaterialItem.Bones,
		name: "Bones",
		description: "Bury or bring to an altar for prayer XP.",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 15,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.BigBones,
		name: "Big Bones",
		description: "Bury or bring to an altar for significant prayer XP.",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 25,
		weight: 0.25,
		limit: 1e3,
	},
	{
		type: MaterialItem.Ashes,
		name: "Ashes",
		description: "Ashes from a deceased entity.",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 5,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MaterialItem.FishBait,
		name: "Fish Bait",
		description: "A necessity to go fishing in the barrenlands",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 1,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MaterialItem.RockDust,
		name: "Rock Dust",
		description: "A necessity to go rockfishing",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: MealItem.FishSauce,
		name: "Fish Sauce",
		description: "Fish Sauce, used in cooking and alchemy",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 20,
		weight: 0.3,
		limit: 1e3,
	},
	{
		type: FishingRodItem.Default,
		textureId: "fishingrod",
		name: "Fishing Rod",
		description: "A fishing rod",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 5,
		weight: 1,
		isStarterItem: !0,
	},
	{
		type: FishingRodItem.Enhanced,
		textureId: "fishingrod",
		name: "Enhanced Fishing Rod",
		description: "A reinforced steel fishing rod",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 100,
		weight: 1.2,
		tier: 4,
		crafting: {
			materials: [
				{
					type: MaterialItem.OakLog,
					quantity: 10,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 60,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Fishing,
				level: 60,
			},
		],
	},
	{
		type: HatItem.Fishing,
		textureId: HatItem.Fishing,
		name: "Fishing Cap",
		description: "Very stylish fishing hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 20,
		weight: 0.1,
		tier: 4,
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 2,
				},
				{
					type: MaterialItem.BearLeather,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 65,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Fishing,
				level: 65,
			},
		],
	},
	{
		type: MaterialItem.Dragonhide,
		name: "Dragonhide",
		description: "Used in various crafting recipes.",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 300,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MaterialItem.Thread,
		name: "Thread",
		description: "Used in various crafting recipes.",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		value: 5,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.WeaponPoisonT1,
		name: "Weak Weapon Poison",
		description: "A vial of weak weapon poison!",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		tier: 1,
		value: 5,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.WeaponPoisonT2,
		name: "Weapon Poison",
		description: "A vial of weapon poison!",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		tier: 2,
		value: 10,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.WeaponPoisonT3,
		name: "Strong Weapon Poison",
		description: "A vial of potent weapon poison!",
		category: "material",
		equipmentSlot: null,
		fungible: !0,
		tier: 3,
		value: 15,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MealItem.AnchovySoup,
		textureId: "anchovysoup",
		name: "Anchovy Soup",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Increases effective Fishing level by 15 and boosts experience gained by 10% for 5 minutes.",
		cooking: {
			materials: [
				{
					type: RawFishItem.Trout,
					quantity: 5,
				},
				{
					type: RawFishItem.Cod,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 65,
				},
			],
			boost_type: ["fishing"],
			boost_effect: 15,
			boost_duration: 3e5,
		},
		value: 25,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.SeaweedSoup,
		textureId: "seaweedsoup",
		name: "Seaweed Soup",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Increases all timed action (progress bar) speed by 25% for 1 minute",
		cooking: {
			materials: [
				{
					type: RawFishItem.Lobster,
					quantity: 3,
				},
				{
					type: "raw_kelp",
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 75,
				},
			],
			boost_type: ["speed"],
			boost_effect: 1.25,
			boost_duration: 6e4,
		},
		value: 65,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.SnailSaltSoup,
		textureId: MealItem.SnailSaltSoup,
		name: "Snail Salt Soup",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description: "Boosts fishing current level, stacks up to 5 times",
		cooking: {
			materials: [
				{
					type: MaterialItem.SnailsShell,
					quantity: 3,
				},
				{
					type: RawFishItem.Carp,
					quantity: 3,
				},
				{
					type: "raw_kelp",
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 85,
				},
			],
		},
		value: 165,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.NagasBlessing,
		textureId: MealItem.NagasBlessing,
		name: "Naga's Blessing",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Boosts fishing current level by percentage, stacks up to 5 times",
		cooking: {
			materials: [
				{
					type: MaterialItem.Salt,
					quantity: 3,
				},
				{
					type: "raw_kelp",
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 95,
				},
			],
		},
		value: 225,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.HeartyStew,
		textureId: "heartystew",
		name: "Hearty Stew",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Increases mining, woodcutting, and fishing XP by 20% for 3 minutes",
		cooking: {
			materials: [
				{
					type: RawFishItem.Carp,
					quantity: 5,
				},
				{
					type: "raw_kelp",
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 55,
				},
			],
			boost_type: ["mining", "fishing", "woodcutting"],
			boost_effect: 1.2,
			boost_duration: 18e4,
		},
		value: 55,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.BeefStew,
		textureId: "beefstew",
		name: "Beef Stew",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 70 HP after channeling for 1.6s",
		cooking: {
			materials: [
				{
					type: MaterialItem.CowMeat,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 1,
				},
			],
		},
		value: 20,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.VenisonStew,
		textureId: "venisonstew",
		name: "Venison Stew",
		category: "consumable",
		tier: 2,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 160 HP after channeling for 1.6s",
		cooking: {
			materials: [
				{
					type: MaterialItem.DeerMeat,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 55,
				},
			],
		},
		value: 100,
		weight: 1.5,
		limit: 1e3,
	},
	{
		type: MealItem.BoarStew,
		textureId: "boarstew",
		name: "Boar Stew",
		category: "consumable",
		tier: 3,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 320 HP after channeling for 1.6s",
		cooking: {
			materials: [
				{
					type: MaterialItem.BoarMeat,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 65,
				},
			],
		},
		value: 120,
		weight: 1.7,
		limit: 1e3,
	},
	{
		type: MealItem.BearStew,
		textureId: "bearstew",
		name: "Bear Stew",
		category: "consumable",
		tier: 4,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "food",
		description: "Heals 400 HP after channeling for 1.6s",
		cooking: {
			materials: [
				{
					type: MaterialItem.BearMeat,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 80,
				},
			],
		},
		value: 150,
		weight: 2,
		limit: 1e3,
	},
	{
		type: MealItem.MushroomPie,
		textureId: "mushroompie",
		name: "Cambrian Pie",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description: "Increases all XP gained by 10% for 1.5 minutes",
		cooking: {
			materials: [
				{
					type: RawFishItem.Cod,
					quantity: 5,
				},
				{
					type: MaterialItem.CowMeat,
					quantity: 5,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 5,
				},
				{
					type: RawFishItem.Eel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 70,
				},
			],
			boost_type: ["allSkills"],
			boost_effect: 1.1,
			boost_duration: 9e4,
		},
		value: 100,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MealItem.CodChunks,
		textureId: "codchunks",
		name: "Cod Chunks",
		category: "consumable",
		tier: 2,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Increases effective Cooking level by 15 and boosts experience gained by 10% for 5 minutes.",
		cooking: {
			materials: [
				{
					type: RawFishItem.Cod,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 10,
				},
			],
			boost_type: ["cooking"],
			boost_effect: 1.1,
			boost_duration: 3e5,
		},
		value: 110,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MealItem.RabbitPie,
		textureId: "rabbitpie",
		name: "Rabbit Pie",
		category: "consumable",
		tier: 2,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Increases effective Smithing level by 5 and boosts experience gained by 10% for 5 minutes.",
		cooking: {
			materials: [
				{
					type: RawFishItem.Trout,
					quantity: 5,
				},
				{
					type: RawFishItem.Carp,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 65,
				},
			],
			boost_type: ["smithing"],
			boost_effect: 1.1,
			boost_duration: 3e5,
		},
		value: 125,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MealItem.HoneyCake,
		textureId: "honey_cake",
		name: '"Honey" Cake',
		category: "consumable",
		tier: 2,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Increases effective Engineering level by 15 and boosts experience gained by 10% for 5 minutes.",
		cooking: {
			materials: [
				{
					type: "raw_kelp",
					quantity: 5,
				},
				{
					type: MaterialItem.BoarMeat,
					quantity: 2,
				},
				{
					type: RawFishItem.Eel,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 80,
				},
			],
			boost_type: ["engineering"],
			boost_effect: 1.1,
			boost_duration: 3e5,
		},
		value: 125,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MealItem.TunaFishPie,
		textureId: "tuna_fish_pie",
		name: "Horrible Stew",
		category: "consumable",
		tier: 4,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description:
			"Increases effective Chargecrafting level by 15 and boosts experience gained by 10% for 5 minutes.",
		cooking: {
			materials: [
				{
					type: RawFishItem.Eel,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 75,
				},
			],
			boost_type: ["chargecrafting"],
			boost_effect: 1.1,
			boost_duration: 3e5,
		},
		value: 125,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MealItem.DragonfruitPie,
		textureId: "dragonfruit_pie",
		name: "Dragonfruit Pie",
		category: "consumable",
		tier: 4,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "meal",
		description: "Increases woodcutting efficiency by 25% for 1 minute",
		cooking: {
			materials: [
				{
					type: RawFishItem.Cod,
					quantity: 3,
				},
				{
					type: RawFishItem.Carp,
					quantity: 3,
				},
				{
					type: "raw_kelp",
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 55,
				},
			],
			boost_type: ["woodcutting"],
			boost_effect: 1.25,
			boost_duration: 6e4,
		},
		value: 55,
		weight: 1.2,
		limit: 1e3,
	},
	{
		type: MealItem.KingsLobsterDelight,
		textureId: "kings_lobster_delight",
		name: "King’s Lobster Delight",
		category: "consumable",
		tier: 4,
		fungible: !0,
		equipmentSlot: null,
		description:
			"Increases effective Agility level by 15 and boosts experience gained by 10% for 5 minutes.",
		consumableType: "meal",
		cooking: {
			materials: [
				{
					type: RawFishItem.Lobster,
					quantity: 3,
				},
				{
					type: "raw_kelp",
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Cooking,
					level: 50,
				},
			],
			boost_type: ["agility"],
			boost_effect: 1.1,
			boost_duration: 3e5,
		},
		value: 25,
		weight: 1.7,
		limit: 1e3,
	},
	{
		type: ChestItem.Reward,
		textureId: "chest",
		name: "Prizefighter's Chest",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "chest",
		value: 1500,
		limit: 1e3,
		duelArenaOnly: !0,
	},
	{
		type: ChestItem.PugilistReward,
		textureId: "chest",
		name: "Pugilist's Chest",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "chest",
		value: 1500,
		limit: 1e3,
		duelArenaOnly: !0,
	},
	{
		type: ChestItem.OddsmakerReward,
		textureId: "chest",
		name: "Jester's Chest",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "chest",
		value: 1500,
		duelArenaOnly: !0,
		limit: 1,
	},
	{
		type: ChestItem.Starter_Small,
		textureId: "chest",
		name: "Starter Chest",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "chest",
		excludeFromTrade: !1,
		value: 1,
		limit: 1e3,
	},
	{
		type: ChestItem.Starter_Big,
		textureId: "chest",
		name: "Starter Chest",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "chest",
		excludeFromTrade: !1,
		value: 1,
		limit: 1e3,
	},
	{
		type: FunnyWeaponItem.RubberChicken,
		textureId: "rubberchicken",
		name: "Rubber Chicken",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		value: 1e4,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 35,
		combatType: CombatType.MELEE,
		duelArenaOnly: !0,
	},
	{
		type: FunnyWeaponItem.Tomato,
		textureId: "tomato",
		name: "Tomato",
		description: "A tomato to throw at people.",
		limit: 1e5,
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: FunnyWeaponItem.SnowBall,
		textureId: FunnyWeaponItem.SnowBall,
		name: "Snowball",
		category: "equipment",
		equipmentSlot: "ammo",
		limit: 2147483647,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: SpecialItem.AgilityTicket,
		textureId: SpecialItem.AgilityTicket,
		name: "Agility Ticket",
		description: "Prize for completing full lap of Wilderness Agility Course",
		category: "consumable",
		consumableType: "ticket",
		fungible: !0,
		excludeFromTrade: !0,
		equipmentSlot: null,
		limit: 1e3,
		value: 1,
		destroyOnDeath: !0,
	},
	{
		type: MaterialItem.BloodstainedSilver,
		textureId: MaterialItem.BloodstainedSilver,
		name: "Bloodstained Silver",
		description: "Silver stained with blood. Sell to the General Store.",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		limit: 2147483647,
		value: 1,
	},
	{
		type: SpecialItem.AgilityRewardPass,
		textureId: SpecialItem.AgilityRewardPass,
		name: "Agility Reward Pass",
		description:
			"Provides additional prizes for finishing lap of agility course",
		category: "consumable",
		consumableType: "ticket",
		fungible: !1,
		excludeFromTrade: !0,
		equipmentSlot: null,
		limit: 1,
		value: 1,
		destroyOnDeath: !0,
	},
	{
		type: ChristmasItem.Cracker,
		textureId: ChristmasItem.Cracker,
		name: "Christmas Cracker",
		category: "consumable",
		consumableType: "cracker",
		fungible: !1,
		limit: 1,
		excludeFromTrade: !1,
		equipmentSlot: null,
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: ChristmasItem.GreenCracker,
		textureId: ChristmasItem.GreenCracker,
		name: "Green Christmas Cracker",
		category: "consumable",
		consumableType: "cracker",
		fungible: !1,
		limit: 1,
		excludeFromTrade: !1,
		equipmentSlot: null,
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: ChristmasItem.RedCracker,
		textureId: ChristmasItem.RedCracker,
		name: "Red Christmas Cracker",
		category: "consumable",
		consumableType: "cracker",
		fungible: !1,
		limit: 1,
		excludeFromTrade: !1,
		equipmentSlot: null,
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: ChristmasItem.BlueCracker,
		textureId: ChristmasItem.BlueCracker,
		name: "Blue Christmas Cracker",
		category: "consumable",
		consumableType: "cracker",
		fungible: !1,
		limit: 1,
		excludeFromTrade: !1,
		equipmentSlot: null,
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: ChristmasItem.LumpOfCoal,
		textureId: ChristmasItem.LumpOfCoal,
		name: "Lump of Coal",
		category: "material",
		equipmentSlot: null,
		fungible: !1,
		limit: 1,
		excludeFromTrade: !1,
		value: 1,
		duelArenaOnly: !0,
	},
	{
		type: ObjectItem.Barricade,
		name: "Barricade",
		textureId: "barricade_item",
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 10,
		weight: 1,
		tier: 1,
		description: "This can be used to block off areas...",
		engineering: {
			materials: [
				{
					type: PartsItem.BasicParts,
					quantity: 1,
				},
				{
					type: MaterialItem.Plank,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 1,
				},
			],
			type: "contraption",
		},
	},
	{
		type: ObjectItem.Campfire,
		name: "Campfire Set",
		textureId: "campfire_item",
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 10,
		weight: 1,
		tier: 1,
		description: "This can be used to set up cozy campfire...",
		engineering: {
			materials: [
				{
					type: MaterialItem.OakLog,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 1,
				},
			],
			type: "contraption",
		},
	},
	{
		type: ObjectItem.Cannon,
		name: "Auto Ballista",
		textureId: "cannon_item",
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		weight: 1,
		tier: 1,
		description: "A marvel of engineering.",
		engineering: {
			materials: [
				{
					type: PartsItem.ComplexParts,
					quantity: 25,
				},
				{
					type: MaterialItem.Plank,
					quantity: 10,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 80,
				},
			],
			type: "contraption",
		},
	},
	{
		type: PartsItem.BasicParts,
		name: "Basic Parts",
		textureId: PartsItem.BasicParts,
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 5,
		weight: 0.1,
		tier: 1,
		description: "This can be used to create contraptions.",
		engineering: {
			materials: [
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 1,
				},
			],
			type: "partsManufacturing",
		},
	},
	{
		type: PartsItem.ComplexParts,
		name: "Complex Parts",
		textureId: PartsItem.ComplexParts,
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 10,
		weight: 0.1,
		tier: 2,
		description: "This can be used to create advanced contraptions.",
		engineering: {
			materials: [
				{
					type: MaterialItem.MystbarkLog,
					quantity: 1,
				},
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 40,
				},
			],
			type: "partsManufacturing",
		},
	},
	{
		type: TrapItem.Poison,
		name: "Poison Trap",
		textureId: "poison_trap",
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 10,
		weight: 1,
		tier: 1,
		description: "Poisons and slows any that step in it...",
		engineering: {
			materials: [
				{
					type: MaterialItem.Verdantcloth,
					quantity: 1,
				},
				{
					type: PartsItem.BasicParts,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 20,
				},
			],
			type: "contraption",
		},
	},
	{
		type: TrapItem.TreeSpring,
		name: "Tree Spring Trap",
		textureId: "tree_spring_trap",
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 10,
		weight: 1,
		tier: 2,
		description:
			"Pushes victim forward 2 tiles in direction that trap setter was facing when placing it, and stuns",
		engineering: {
			materials: [
				{
					type: MaterialItem.Plank,
					quantity: 1,
				},
				{
					type: PartsItem.BasicParts,
					quantity: 1,
				},
				{
					type: MaterialItem.Gleamcloth,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 40,
				},
			],
			type: "contraption",
		},
	},
	{
		type: TrapItem.Pit,
		name: "Pit Trap",
		textureId: "pit_trap",
		category: "consumable",
		consumableType: "object",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		value: 10,
		weight: 1,
		tier: 3,
		description: "Roots victim in place for 8 seconds",
		engineering: {
			materials: [
				{
					type: MaterialItem.Plank,
					quantity: 3,
				},
				{
					type: PartsItem.BasicParts,
					quantity: 3,
				},
				{
					type: MaterialItem.Gleamcloth,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 70,
				},
			],
			type: "contraption",
		},
	},
	{
		type: TorchItem.Small,
		name: "Small Torch",
		textureId: "torchsmall",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "offhand",
		value: 5,
		weight: 0.1,
		description: "This will help me out in the wilderness...",
		crafting: {
			materials: [
				{
					type: MaterialItem.Log,
					quantity: 10,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
	},
	{
		type: TorchItem.Medium,
		name: "Medium Torch",
		textureId: "torchmedium",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "offhand",
		value: 10,
		weight: 0.2,
		description: "This will help me out in the wilderness...",
		crafting: {
			materials: [
				{
					type: MaterialItem.MystbarkLog,
					quantity: 10,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 45,
				},
			],
		},
	},
	{
		type: TorchItem.Big,
		name: "Large Torch",
		textureId: "torchbig",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "offhand",
		value: 20,
		weight: 0.3,
		description: "This will help me out in the wilderness...",
		crafting: {
			materials: [
				{
					type: MaterialItem.MystbarkLog,
					quantity: 15,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 55,
				},
			],
		},
	},
	{
		type: ChestKeyFabricatorItem.Barrens,
		name: "Barrens Key Fabrication",
		description: "A key that unlocks the Barrens chest.",
		textureId: ChestKeyFabricatorItem.Barrens,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 100,
		weight: 5,
	},
	{
		type: ChestKeyFabricatorItem.Wilderness,
		name: "Wilderness Key Fabrication",
		description: "A key that unlocks the Wilderness chest.",
		textureId: ChestKeyFabricatorItem.Wilderness,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 500,
		weight: 10,
	},
	{
		type: ChestKeyFabricatorItem.Swamp,
		name: "Swamp Key Fabrication",
		description: "A key that unlocks the Swamp chest.",
		textureId: ChestKeyFabricatorItem.Swamp,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 250,
		weight: 5,
	},
	{
		type: ChestKeyFabricatorItem.DarkForest,
		name: "Dark Forest Key Fabrication",
		description: "A key that unlocks the Dark Forest chest.",
		textureId: ChestKeyFabricatorItem.DarkForest,
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 250,
		weight: 5,
	},
	{
		type: BattleAxeItem.Iron,
		textureId: "battleaxe_iron",
		name: "Iron Battle Axe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: battleAxeWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 25,
			[AttackBonus.SLASH]: 25,
			[AttackBonus.CRUSH]: 25,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 23,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 300,
		weight: 3,
		distance: 35,
		tier: 2,
		combatType: CombatType.MELEE,
		description:
			"A battle axe made of iron, moderate attack and strength bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
			{
				skill: SkillType$1.Strength,
				level: 40,
			},
		],
	},
	{
		type: BattleAxeItem.Steel,
		textureId: "battleaxe_steel",
		name: "Steel Battle Axe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: battleAxeWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 51,
			[AttackBonus.SLASH]: 51,
			[AttackBonus.CRUSH]: 51,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 61,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 400,
		weight: 3.5,
		distance: 35,
		tier: 3,
		combatType: CombatType.MELEE,
		description:
			"A battle axe made of steel, substantial attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Leaping Slash: dash to target and deal 20% more damage on next hit, stagger for 0.4s",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: BattleAxeItem.Adamantine,
		textureId: "battleaxe_adamantine",
		name: "Adamantine Battle Axe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: battleAxeWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 61,
			[AttackBonus.SLASH]: 61,
			[AttackBonus.CRUSH]: 61,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 80,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 4,
		distance: 70,
		tier: 4,
		combatType: CombatType.MELEE,
		description:
			"A battle axe made of adamantine, exceptional attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Leaping Slash: dash to target and deal 35% more damage on next hit, stagger for 1s",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: BattleAxeItem.AdamantineMasterwork,
		textureId: "battleaxe_adamantine",
		name: "Adamantine Battle Axe (Masterwork)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: battleAxeWeaponStyles,
		hasSpecial: !0,
		specialAttackDescription:
			"Leaping Slash: dash to target and deal 50% more damage on next hit, stagger for 1.6s",
		attackBonus: {
			[AttackBonus.PIERCE]: 73,
			[AttackBonus.SLASH]: 73,
			[AttackBonus.CRUSH]: 73,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 104,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 4,
		distance: 70,
		tier: 5,
		combatType: CombatType.MELEE,
		description:
			"A masterwork battle axe made of adamantine, exceptional attack and strength bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.AdamantineMasterwork,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: SpearItem.Iron,
		textureId: "iron_spear",
		name: "Iron Spear",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: spearWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 18,
			[AttackBonus.SLASH]: 18,
			[AttackBonus.CRUSH]: 18,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 16,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 1,
			[DefenseBonus.SLASH]: 1,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 300,
		isTwoHanded: !0,
		weight: 2.7,
		distance: 70,
		tier: 2,
		combatType: CombatType.MELEE,
		description: "A spear made of iron, moderate attack and strength bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: SpearItem.Steel,
		textureId: "steel_spear",
		name: "Steel Spear",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: spearWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 37,
			[AttackBonus.SLASH]: 37,
			[AttackBonus.CRUSH]: 37,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 45,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 1,
			[DefenseBonus.SLASH]: 1,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 400,
		weight: 3.2,
		distance: 70,
		tier: 3,
		isTwoHanded: !0,
		combatType: CombatType.MELEE,
		description:
			"A spear made of steel,substantial attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Spear Shove: Pushes back target 2 tiles and stuns for 1s",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: SpearItem.Adamantine,
		textureId: "adamantine_spear",
		name: "Adamantine Spear",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: spearWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 45,
			[AttackBonus.SLASH]: 45,
			[AttackBonus.CRUSH]: 45,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 59,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 1,
			[DefenseBonus.SLASH]: 1,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 3.7,
		distance: 70,
		isTwoHanded: !0,
		tier: 4,
		combatType: CombatType.MELEE,
		description:
			"A spear made of adamantine, exceptional attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Spear Shove: Pushes back target 2 tiles and stuns for 2s",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: SpearItem.AdamantineMasterwork,
		textureId: "adamantine_spear",
		name: "Adamantine Spear (Masterwork)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: spearWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 54,
			[AttackBonus.SLASH]: 54,
			[AttackBonus.CRUSH]: 54,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 77,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 1,
			[DefenseBonus.SLASH]: 1,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 3.7,
		distance: 70,
		isTwoHanded: !0,
		tier: 5,
		combatType: CombatType.MELEE,
		description:
			"A masterwork spear made of adamantine, exceptional attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Spear Shove: Pushes back target 2 tiles and stuns for 3s",
		crafting: {
			materials: [
				{
					type: ShardItem.AdamantineMasterwork,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: WarClubItem.Bronze,
		textureId: "warclub_bronze",
		name: "Bronze War Club",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: warClubWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 20,
			[AttackBonus.SLASH]: 20,
			[AttackBonus.CRUSH]: 20,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 14,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 30,
		weight: 2.3,
		distance: 35,
		tier: 1,
		combatType: CombatType.MELEE,
		description:
			"A war club made of bronze, minor attack and strength bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Bronze,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Bronze,
				quantity: 2,
			},
		],
	},
	{
		type: WarClubItem.Iron,
		textureId: "warclub_iron",
		name: "Iron War Club",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: warClubWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 27,
			[AttackBonus.SLASH]: 27,
			[AttackBonus.CRUSH]: 27,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 24,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 300,
		weight: 2.8,
		distance: 35,
		tier: 2,
		combatType: CombatType.MELEE,
		description:
			"A war club made of iron, moderate attack and strength bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: WarClubItem.Steel,
		textureId: "warclub_steel",
		name: "Steel War Club",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: warClubWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 56,
			[AttackBonus.SLASH]: 56,
			[AttackBonus.CRUSH]: 56,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 68,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 400,
		weight: 3.3,
		distance: 35,
		tier: 3,
		combatType: CombatType.MELEE,
		description:
			"A war club made of steel, substantial attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Crushing Blows: 0-25 attack speed based on opponent's armor for 6s",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: WarClubItem.Adamantine,
		textureId: "warclub_adamantine",
		name: "Adamantine War Club",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: warClubWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 56,
			[AttackBonus.SLASH]: 56,
			[AttackBonus.CRUSH]: 56,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 88,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 3.8,
		distance: 35,
		tier: 4,
		combatType: CombatType.MELEE,
		description:
			"A war club made of adamantine, exceptional attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Crushing Blows: 0-50% attack speed based on opponent's armor for 6s",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: WarClubItem.AdamantineMasterwork,
		textureId: "warclub_adamantine",
		name: "Adamantine War Club (Masterwork)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: warClubWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 81,
			[AttackBonus.SLASH]: 81,
			[AttackBonus.CRUSH]: 81,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 116,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 3.8,
		distance: 35,
		tier: 5,
		combatType: CombatType.MELEE,
		description:
			"A masterwork war club made of adamantine, exceptional attack and strength bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Crushing Blows: 0-80% attack speed based on opponent's armor for 6s",
		crafting: {
			materials: [
				{
					type: ShardItem.AdamantineMasterwork,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: BatteringClubItem.Standard,
		textureId: "batteringclub",
		name: "Battering Club",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: batteringClubWeaponStyles,
		isTwoHanded: !0,
		attackBonus: {
			[AttackBonus.PIERCE]: 56,
			[AttackBonus.SLASH]: 56,
			[AttackBonus.CRUSH]: 56,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 68,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 40,
		weight: 3.8,
		distance: 35,
		tier: 1,
		combatType: CombatType.MELEE,
		description: "A simple club, does Area of Effect damage.",
		crafting: {
			materials: [
				{
					type: MaterialItem.OakLog,
					quantity: 5,
				},
				{
					type: BarItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 60,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 60,
			},
		],
	},
	{
		type: BatteringClubItem.Spiked,
		textureId: "spiked_batteringclub",
		name: "Spiked Battering Club",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: batteringClubWeaponStyles,
		isTwoHanded: !0,
		attackBonus: {
			[AttackBonus.PIERCE]: 56,
			[AttackBonus.SLASH]: 56,
			[AttackBonus.CRUSH]: 56,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 88,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 450,
		weight: 3.8,
		distance: 35,
		tier: 2,
		combatType: CombatType.MELEE,
		description: "A spiked club with exceptional attack and strength bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: BarItem.Steel,
					quantity: 1,
				},
				{
					type: NailItem.Bronze,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 75,
			},
		],
	},
	{
		type: LongbowItem.Longbow,
		textureId: "longbow",
		name: "Longbow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: longbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 22,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 600,
		tier: 2,
		weight: 3,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 200,
		description:
			"A basic bow with substantial power, long range, and slow attack speed.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Gleamcloth,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 15,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
	},
	{
		type: LongbowItem.OakLongbow,
		textureId: "oaklongbow",
		name: "Oak Longbow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: longbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 52,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 600,
		tier: 3,
		weight: 3,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 200,
		description:
			"An oak bow with substantial power, long range, and slow attack speed.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Verdantcloth,
					quantity: 1,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 20,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 55,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 50,
			},
		],
	},
	{
		type: LongbowItem.MystbarkLongbow,
		textureId: "mystbarklongbow",
		name: "Mystbark Longbow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: longbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 86,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 600,
		tier: 4,
		weight: 3,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 400,
		hasSpecial: !0,
		description:
			"A magic bow with exceptional power, long range, and slow attack speed.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 10,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 75,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 80,
			},
		],
	},
	{
		type: LongbowItem.Mageslayer,
		textureId: "mageslayerbow",
		name: "Mageslayer Bow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: longbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 80,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 600,
		tier: 4,
		weight: 3,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 200,
		hasSpecial: !0,
		specialAttackDescription:
			"Disrupt your targets mana with a rapid burst of energy, dealing massive damage scaling on their magic, but only if they've used magic abilities recently.",
		description:
			"A relic of forgotten wars, said to hum with latent energy when drawn",
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 2,
				},
				{
					type: GemstoneItem.Diamond,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 10,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
				{
					name: SkillType$1.Magic,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 95,
			},
		],
	},
	{
		type: LongbowItem.Felfire,
		textureId: "felfirebow",
		name: "Felfire Heavy Bow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: longbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 92,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 600,
		tier: 5,
		weight: 3,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 1800,
		hasSpecial: !0,
		specialAttackDescription:
			"Channel felfire energy to unleash three corrupted orbs towards the target, striking in quick succession.",
		description:
			"Engulfed in eerie green flames, this bow emanates an unsettling heat, its presence alone enough to unnerve the bravest warriors.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 1,
				},
				{
					type: GemstoneItem.Ruby,
					quantity: 1,
				},
				{
					type: MaterialItem.BloodstainedSilver,
					quantity: 5e4,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 10,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
				{
					name: SkillType$1.Magic,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 95,
			},
		],
	},
	{
		type: ShortbowItem.Shortbow,
		textureId: "shortbow",
		name: "Shortbow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: shortbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 20,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 200,
		tier: 2,
		weight: 2,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 60,
		description:
			"A basic bow with moderate power, high attack speed, and short range.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Gleamcloth,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 15,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 1,
			},
		],
	},
	{
		type: ShortbowItem.OakShortbow,
		textureId: "oakshortbow",
		name: "Oak Shortbow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: shortbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 47,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 200,
		tier: 3,
		weight: 2,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 120,
		description:
			"An oak bow with exceptional power, high attack speed, and short range.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Verdantcloth,
					quantity: 1,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 20,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 55,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 50,
			},
		],
	},
	{
		type: ShortbowItem.MystbarkShortbow,
		textureId: "mystbarkshortbow",
		name: "Mystbark Shortbow",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: shortbowWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 78,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 200,
		tier: 4,
		weight: 2,
		isTwoHanded: !0,
		combatType: CombatType.RANGED,
		value: 300,
		hasSpecial: !0,
		description:
			"A magic bow with exceptional power, high attack speed, and short range.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 15,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 75,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Log,
				quantity: 1,
			},
			{
				name: MaterialItem.Thread,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 80,
			},
		],
	},
	{
		type: OrbItem.Energy,
		textureId: "stable_energy_orb",
		name: "Energy Orb",
		description: "A stable energy orb that restores 100,000 energy",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "orb",
		value: 5,
		weight: 1e-4,
		limit: 1e3,
	},
	{
		type: TeleportTabItem.CAPITAL_CITY,
		textureId: "teleport_tab_capital",
		name: "Teleport Tab: Capital City",
		description: "A teleport tab that instantly takes you to the Capital City",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "tab",
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: ScrollItem.Teleport,
		textureId: "teleport_scroll",
		name: "Teleport Scroll",
		description:
			"A scroll of teleportation that instantly takes you to the Capital City",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "scroll",
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: ScrollItem.Teleblock,
		textureId: "teleblock_scroll",
		name: "Teleblock Scroll",
		description:
			"A scroll of teleblock that allows you to cast teleblock on the opponent",
		category: "material",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		excludeFromTrade: !1,
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: DiskItem.Nature,
		textureId: "nature_disk",
		name: "Disk of Nature",
		description:
			"A disk of nature, sacrifice 5 to summon the Shroom Lord at his altar",
		category: "equipment",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		excludeFromTrade: !1,
		value: 100,
		weight: 0.4,
		limit: 10,
	},
	{
		type: ScrollItem.WarpTeleport,
		textureId: "teleport_scroll",
		name: "Warp Scroll",
		description: "To use: CTRL + CLICK somewhere near you on the map.",
		category: "equipment",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		excludeFromTrade: !1,
		value: 10,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: ScrollItem.TeleportGateCapital,
		textureId: "teleport_gate_capital",
		name: "Gate to Capital City",
		description: "A scroll of teleportation that leads to the Capital City",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "scroll",
		excludeFromTrade: !1,
		value: 100,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: ScrollItem.TeleportGateNewMortis,
		textureId: "teleport_gate_newmortis",
		name: "Gate to New Mortis",
		description: "A scroll of teleportation that leads to New Mortis",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "scroll",
		excludeFromTrade: !1,
		value: 100,
		weight: 0.1,
		limit: 1e3,
	},
	{
		type: DrugItem.CocaLeaves,
		textureId: "coca_leaves",
		name: "Coca Leaves",
		description:
			"Significantly boosts movement speed temporarily, at the cost of HP",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "drug",
		effectDuration: 5,
		value: 10,
		weight: 2,
		limit: 1,
	},
	{
		type: MaterialItem.GleamingCotton,
		name: "Gleaming Cotton",
		description: "Gleaming Cotton, ready to be processed into a fine cloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 5,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.VerdantFlax,
		name: "Verdant Flax",
		description: "Verdant Flax, ready to be processed into an ultra fine cloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 15,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: MaterialItem.AzureCoir,
		name: "Azure Coir",
		description:
			"Azure Coir, ready to be processed into an extremely fine cloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 20,
		weight: 0.6,
		limit: 1e3,
	},
	{
		type: MaterialItem.ElderHemp,
		name: "Elder Hemp",
		description:
			"Elder Hemp, ready to be processed into a slightly magical piece of fine cloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 30,
		weight: 0.8,
		limit: 1e3,
	},
	{
		type: MaterialItem.Gleamcloth,
		name: "Gleamcloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "A fine cloth.",
		crafting: {
			materials: [
				{
					type: MaterialItem.GleamingCotton,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		value: 25,
		weight: 0.2,
		limit: 1e3,
	},
	{
		type: MaterialItem.Verdantcloth,
		name: "Verdantcloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "An ultra fine cloth.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Gleamcloth,
					quantity: 3,
				},
				{
					type: MaterialItem.VerdantFlax,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		value: 75,
		weight: 0.4,
		limit: 1e3,
	},
	{
		type: MaterialItem.Azurecloth,
		name: "Azurecloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "An extremely fine cloth.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Verdantcloth,
					quantity: 3,
				},
				{
					type: MaterialItem.AzureCoir,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 60,
				},
			],
		},
		value: 100,
		weight: 0.6,
		limit: 1e3,
	},
	{
		type: MaterialItem.Eldercloth,
		name: "Eldercloth",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "A slightly magical piece of fine cloth.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 3,
				},
				{
					type: MaterialItem.ElderHemp,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		value: 150,
		weight: 0.8,
		limit: 1e3,
	},
	{
		type: MaterialItem.CowMeat,
		name: "Cow Meat",
		description: "Raw cow meat, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.25,
		limit: 1e3,
	},
	{
		type: MaterialItem.DeerMeat,
		name: "Deer Meat",
		description: "Raw deer meat, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 15,
		weight: 0.5,
		limit: 1e3,
	},
	{
		type: MaterialItem.BoarMeat,
		name: "Boar Meat",
		description: "Raw boar meat, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 20,
		weight: 0.75,
		limit: 1e3,
	},
	{
		type: MaterialItem.BearMeat,
		name: "Bear Meat",
		description: "Raw bear meat, can be used in cooking",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 30,
		weight: 1,
		limit: 1,
	},
	{
		type: MaterialItem.CowHide,
		name: "Cow Hide",
		category: "material",
		description: "Cow hide, made from skinning the animal",
		fungible: !0,
		equipmentSlot: null,
		value: 10,
		weight: 0.25,
		limit: 1e3,
	},
	{
		type: MaterialItem.DeerHide,
		name: "Deer Hide",
		description: "Deer hide, made from skinning the animal",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 20,
		weight: 0.5,
		limit: 1e3,
	},
	{
		type: MaterialItem.BoarHide,
		name: "Boar Hide",
		description: "Boar hide, made from skinning the animal",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 50,
		weight: 0.75,
		limit: 1e3,
	},
	{
		type: MaterialItem.BearHide,
		name: "Bear Hide",
		description: "Bear hide, made from skinning the animal",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		value: 150,
		weight: 1,
		limit: 1e3,
	},
	{
		type: MaterialItem.CowLeather,
		name: "Cow Leather",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "Leather made from the hide of a cow.",
		crafting: {
			materials: [
				{
					type: MaterialItem.CowHide,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		value: 30,
		weight: 0.25,
		limit: 1e3,
	},
	{
		type: MaterialItem.DeerLeather,
		name: "Deer Leather",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "Leather made from the hide of a deer.",
		crafting: {
			materials: [
				{
					type: MaterialItem.DeerHide,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 15,
				},
			],
		},
		value: 60,
		weight: 0.5,
		limit: 1e3,
	},
	{
		type: MaterialItem.BoarLeather,
		name: "Boar Leather",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "Leather made from the hide of a boar.",
		crafting: {
			materials: [
				{
					type: MaterialItem.BoarHide,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 25,
				},
			],
		},
		value: 100,
		weight: 0.75,
		limit: 1e3,
	},
	{
		type: MaterialItem.BearLeather,
		name: "Bear Leather",
		category: "material",
		fungible: !0,
		equipmentSlot: null,
		description: "Leather made from the hide of a bear.",
		crafting: {
			materials: [
				{
					type: MaterialItem.BearHide,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 45,
				},
			],
		},
		value: 200,
		weight: 1,
		limit: 1e3,
	},
	{
		type: RangedArmorItem.Leather,
		textureId: RangedArmorItem.Leather,
		name: "Leather Armor",
		category: "equipment",
		equipmentSlot: "body",
		fungible: !1,
		limit: 1,
		description:
			"A set of Leather Armor, minor ranged attack and defense bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.DeerLeather,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		value: 100,
		tier: 1,
		weight: 1.5,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -24,
			[AttackBonus.RANGED]: 14,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 40,
			[DefenseBonus.SLASH]: 40,
			[DefenseBonus.CRUSH]: 40,
			[DefenseBonus.MAGIC]: 14,
			[DefenseBonus.RANGED]: 35,
			[DefenseBonus.TENACITY]: 50,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 50,
		},
		repairMaterials: [
			{
				name: MaterialItem.DeerLeather,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 10,
			},
			{
				skill: SkillType$1.Defense,
				level: 10,
			},
		],
	},
	{
		type: RangedArmorItem.Studded,
		textureId: RangedArmorItem.Studded,
		name: "Studded Leather Armor",
		category: "equipment",
		equipmentSlot: "body",
		fungible: !1,
		limit: 1,
		description:
			"A studded set of Leather Armor, moderate ranged attack and defense bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.BoarLeather,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 30,
				},
			],
		},
		value: 200,
		tier: 2,
		weight: 3,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -24,
			[AttackBonus.RANGED]: 22,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 36,
			[DefenseBonus.SLASH]: 36,
			[DefenseBonus.CRUSH]: 36,
			[DefenseBonus.MAGIC]: 89,
			[DefenseBonus.RANGED]: 23,
			[DefenseBonus.TENACITY]: 50,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 50,
		},
		repairMaterials: [
			{
				name: MaterialItem.BoarLeather,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 20,
			},
			{
				skill: SkillType$1.Defense,
				level: 20,
			},
		],
	},
	{
		type: RangedArmorItem.BearHide,
		textureId: RangedArmorItem.BearHide,
		name: "Bearhide Leather Armor",
		category: "equipment",
		equipmentSlot: "body",
		fungible: !1,
		limit: 1,
		description:
			"Leather Armor made from bear hide, substantial ranged attack and defense bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.BearLeather,
					quantity: 3,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 60,
				},
			],
		},
		value: 400,
		tier: 3,
		weight: 3.5,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -24,
			[AttackBonus.RANGED]: 32,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 64,
			[DefenseBonus.SLASH]: 64,
			[DefenseBonus.CRUSH]: 64,
			[DefenseBonus.MAGIC]: 113,
			[DefenseBonus.RANGED]: 55,
			[DefenseBonus.TENACITY]: 50,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 50,
		},
		repairMaterials: [
			{
				name: MaterialItem.BearLeather,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 60,
			},
			{
				skill: SkillType$1.Defense,
				level: 60,
			},
		],
	},
	{
		type: RangedArmorItem.DragonHide,
		textureId: RangedArmorItem.DragonHide,
		name: "Dragonhide Leather Armor",
		category: "equipment",
		equipmentSlot: "body",
		fungible: !1,
		limit: 1,
		description:
			"Leather Armor made from the hide of dragons, exceptional ranged attack and defense bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Dragonhide,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 85,
				},
			],
		},
		value: 1200,
		tier: 4,
		weight: 4.5,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -24,
			[AttackBonus.RANGED]: 46,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 86,
			[DefenseBonus.SLASH]: 86,
			[DefenseBonus.CRUSH]: 86,
			[DefenseBonus.MAGIC]: 163,
			[DefenseBonus.RANGED]: 68,
			[DefenseBonus.TENACITY]: 50,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 50,
		},
		repairMaterials: [
			{
				name: MaterialItem.Dragonhide,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 85,
			},
			{
				skill: SkillType$1.Defense,
				level: 85,
			},
		],
	},
	{
		type: MagicEquipmentItem.Magic,
		textureId: MagicEquipmentItem.Magic,
		name: "Magic Robes",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		description: "A basic set of magic Robes.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Gleamcloth,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 12,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 10,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 1,
			},
		],
		value: 30,
		tier: 1,
		weight: 1.25,
	},
	{
		type: MagicEquipmentItem.Enchanted,
		textureId: "commonmage_clothing",
		name: "Enchanted Robes",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		description:
			"An enchanted set of Robes, minor magic attack and defense bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Verdantcloth,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 25,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Verdantcloth,
				quantity: 1,
			},
		],
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 38,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 30,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 40,
			},
		],
		value: 45,
		tier: 2,
		weight: 1.75,
	},
	{
		type: MagicEquipmentItem.Mystic,
		textureId: "commonmage_clothing",
		name: "Mystic Robes",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		description:
			"A mystic set of Robes, moderate magic attack and defense bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 45,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Azurecloth,
				quantity: 1,
			},
		],
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 52,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 35,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 60,
			},
		],
		value: 60,
		tier: 3,
		weight: 2.25,
	},
	{
		type: MagicEquipmentItem.BattleMage,
		textureId: "battlemage_robe",
		name: "Battlemage Robes",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		description:
			"A set of Battle Mage robes, substantial magic attack and defense bonuses.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Eldercloth,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 55,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.Eldercloth,
				quantity: 2,
			},
		],
		attackBonus: {
			[AttackBonus.PIERCE]: 2,
			[AttackBonus.SLASH]: 2,
			[AttackBonus.CRUSH]: 2,
			[AttackBonus.MAGIC]: 94,
			[AttackBonus.RANGED]: -20,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 3,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 105,
			[DefenseBonus.SLASH]: 86,
			[DefenseBonus.CRUSH]: 120,
			[DefenseBonus.MAGIC]: 74,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 70,
			},
		],
		value: 160,
		tier: 4,
		weight: 2.75,
	},
	{
		type: MagicEquipmentItem.Cultist,
		textureId: "cultist_robe",
		name: "Cultist Robes",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		description:
			"A set of Cultist Mage robes, exceptional magic attack & max hit bonus.",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 122,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 8,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 90,
			},
		],
		value: 1200,
		tier: 4,
		weight: 1.5,
	},
	{
		type: BackpackItem.NoviceBasic,
		textureId: "novicebasic_backpack",
		name: "Novice Basic Backpack (+5)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "backpack",
		value: 30,
		tier: 1,
		description: "A basic backpack, minorly spacious.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Gleamcloth,
					quantity: 3,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
	},
	{
		type: BackpackItem.ExpertTactical,
		textureId: "experttactical_backpack",
		name: "Expert Tactical Backpack (+15)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "backpack",
		value: 45,
		tier: 2,
		description: "A backpack for the expert tactician, substantially spacious.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Verdantcloth,
					quantity: 3,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 45,
				},
			],
		},
	},
	{
		type: BackpackItem.SeasonedAdventurer,
		textureId: "seasonedadventurer_backpack",
		name: "Seasoned Adventurer Backpack (+25)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "backpack",
		value: 60,
		tier: 3,
		description:
			"A backpack for the seasoned adventurer, exceptionally spacious.",
		crafting: {
			materials: [
				{
					type: MaterialItem.Azurecloth,
					quantity: 3,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 65,
				},
			],
		},
	},
	{
		type: BackpackItem.AvasAccumulator,
		textureId: "avasaccumulator_backpack",
		name: "Alanamenti's Backpack of Attraction",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "backpack",
		value: 300,
		tier: 4,
		description: "Automatically retrieves used arrows and bolts.",
		engineering: {
			materials: [
				{
					type: PartsItem.BasicParts,
					quantity: 10,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Eldercloth,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Engineering,
					level: 60,
				},
			],
			type: "contraption",
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 50,
			},
		],
	},
	{
		type: LampItem.Experience,
		name: "Experience Lamp",
		description:
			"Gives experience in a skill of your choice.  Not affected by XP boosts.",
		category: "consumable",
		consumableType: "lamp",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		weight: 3,
		value: 1e3,
	},
	{
		type: MagicChargeItem.UnstableOrb,
		textureId: "unstable_orb",
		name: "Unstable Orb",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		weight: 1,
		value: 1,
	},
	{
		type: BlastItem.Tome,
		name: "Blast Tome",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 0,
		excludeFromTrade: !0,
		duelArenaOnly: !0,
	},
	{
		type: TomeItem.Insight,
		name: "Tome of Insight",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 0,
		excludeFromTrade: !1,
		duelArenaOnly: !1,
	},
	{
		type: ClothingItem.BoxingShorts,
		textureId: "boxing_shorts_clothing",
		name: "Boxing Shorts",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 5e3,
		duelArenaOnly: !0,
	},
	{
		type: ClothingItem.CatOnesie,
		textureId: "catonesie_clothing",
		name: "Cat Onesie",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.DogOnesie,
		textureId: "dogonesie_clothing",
		name: "Dog Onesie",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.Heisenberg,
		textureId: ClothingItem.Heisenberg,
		name: "Heisenberg Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.BeeSuit,
		textureId: ClothingItem.BeeSuit,
		name: "Bee Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.BlueSnakeSuit,
		textureId: ClothingItem.BlueSnakeSuit,
		name: "Snake Suit (Blue)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.GreenSnakeSuit,
		textureId: ClothingItem.GreenSnakeSuit,
		name: "Snake Suit (Green)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.Cthulhu,
		textureId: ClothingItem.Cthulhu,
		name: "Cthulhu Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.DrManhattan,
		textureId: ClothingItem.DrManhattan,
		name: "Doctor Manhattan Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.GigaChadDetective,
		textureId: ClothingItem.GigaChadDetective,
		name: "Gigachad Detective Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.Saitama,
		textureId: ClothingItem.Saitama,
		name: "Saitama Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.Wassie,
		textureId: ClothingItem.Wassie,
		name: "Wassie Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.Streamer,
		textureId: ClothingItem.Streamer,
		name: "Streamer Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.NeoSuit,
		textureId: ClothingItem.NeoSuit,
		name: "Neo Suit",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		excludeFromTrade: !0,
		duelArenaOnly: !0,
		value: 5e3,
	},
	{
		type: ClothingItem.BlastWizardRobe,
		textureId: "blastwizard_robe",
		name: "Blast Wizard Robe",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.BlastWizardHood,
		textureId: "blastwizard_hood",
		name: "Blast Wizard Hood",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e4,
		isFullHelm: !0,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.AngelHalo,
		textureId: "angelhalo",
		name: "Angel Halo",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: HatItem.Beanie,
		textureId: "beanie",
		name: "Beanie",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1e4,
		duelArenaOnly: !0,
		isFullHelm: !0,
	},
	{
		type: HatItem.ChefHat,
		textureId: "chefshat",
		name: "Chef Hat",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		value: 1,
	},
	{
		type: HatItem.BlackMask,
		textureId: HatItem.BlackMask,
		name: "Black Mask",
		description: "Boosts combat accuracy and hides your name.",
		category: "equipment",
		fungible: !1,
		limit: 1,
		tier: 2,
		equipmentSlot: "head",
		value: 200,
		attackBonus: {
			[AttackBonus.PIERCE]: 8,
			[AttackBonus.SLASH]: 8,
			[AttackBonus.CRUSH]: 8,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 4,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 20,
			},
		],
	},
	{
		type: HatItem.EyesSightContraption,
		textureId: HatItem.EyesSightContraption,
		name: "Eyes Sight Contraption",
		description: "Boosts ranged accuracy.",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 12,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		weight: 1,
		tier: 2,
		value: 400,
		duelArenaOnly: !1,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 65,
			},
		],
	},
	{
		type: HatItem.GhostlyHoodie,
		textureId: HatItem.GhostlyHoodie,
		name: "Ghostly Hood",
		category: "equipment",
		description: "Boosts magic accuracy slightly.",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 2,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		value: 100,
		weight: 0.5,
		tier: 2,
		isFullHelm: !0,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 20,
			},
		],
	},
	{
		type: MagicEquipmentItem.CultistHood,
		textureId: "cultist",
		name: "Cultist Hood",
		description: "Boosts magic accuracy.",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 24,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		value: 1200,
		weight: 0.5,
		tier: 4,
		isFullHelm: !0,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 90,
			},
		],
	},
	{
		type: HatItem.MagicRobesHoodie,
		textureId: HatItem.MagicRobesHoodie,
		name: "Magic Hood",
		description: "Boosts magic defense.",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 5,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 200,
		weight: 1,
		tier: 2,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 10,
			},
		],
	},
	{
		type: HatItem.RobinHoodHat,
		textureId: HatItem.RobinHoodHat,
		name: "Robin Hood Hat",
		description: "Boosts ranged strength and defenses.",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -10,
			[AttackBonus.RANGED]: 8,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 6,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 12,
			[DefenseBonus.CRUSH]: 14,
			[DefenseBonus.SLASH]: 15,
			[DefenseBonus.MAGIC]: 23,
			[DefenseBonus.RANGED]: 12,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 400,
		weight: 1,
		tier: 2,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 80,
			},
		],
	},
	{
		type: AxeItem.GiantToyHammer,
		textureId: "giant_toyhammer",
		name: "Oversized Toy Hammer",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: -4,
			[AttackBonus.SLASH]: 103,
			[AttackBonus.CRUSH]: 95,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 105,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 1e4,
		distance: 35,
		combatType: CombatType.MELEE,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.ElementalFire,
		name: "Ramphan (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.MiniDragon,
		name: "Suvius (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.Reaver,
		name: "Good-For-Nothin' (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.ShieldBearer,
		name: "Marco Hellhand (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.SwampFiend,
		name: "R'gur (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.SwampLich,
		name: "High Arbiter Albrus (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.TreeEnt,
		name: "Evil Freebeard (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.Vampire,
		name: "Baron Deucalion (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.Werewolf,
		name: "The Beast (r0)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.ElementalFire1,
		name: "Ramphan (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.MiniDragon1,
		name: "Suvius (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.Reaver1,
		name: "Good-For-Nothin' (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.ShieldBearer1,
		name: "Marco Hellhand (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.SwampFiend1,
		name: "R'gur (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.SwampLich1,
		name: "High Arbiter Albrus (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.TreeEnt1,
		name: "Evil Freebeard (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.Vampire1,
		name: "Baron Deucalion (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChampionTokenItem.Werewolf1,
		name: "The Beast (Round 1)",
		fungible: !0,
		limit: 1e3,
		equipmentSlot: null,
		category: "consumable",
		value: 1e4,
		duelArenaOnly: !0,
	},
	{
		type: ChainWhipItem.Iron,
		textureId: "chainwhip_iron",
		name: "Iron Chainwhip",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: chainWhipWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 20,
			[AttackBonus.SLASH]: 20,
			[AttackBonus.CRUSH]: 20,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 17,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 300,
		weight: 2.6,
		distance: 35,
		tier: 2,
		combatType: CombatType.MELEE,
		description: "A chainwhip made of iron, moderate attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: ChainWhipItem.Steel,
		textureId: "chainwhip_steel",
		name: "Steel Chainwhip",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: chainWhipWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 40,
			[AttackBonus.SLASH]: 40,
			[AttackBonus.CRUSH]: 40,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 48,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 400,
		weight: 3.1,
		distance: 35,
		tier: 3,
		combatType: CombatType.MELEE,
		description: "A chainwhip made of steel, substantial attack bonuses.",
		hasSpecial: !0,
		specialAttackDescription:
			"Whiplash: Root for 2s, lower target's defense by 10% for 10s if not blocked",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 70,
			},
		],
	},
	{
		type: ChainWhipItem.Adamantine,
		textureId: "chainwhip_adamantine",
		name: "Adamantine Chainwhip",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: chainWhipWeaponStyles,
		hasSpecial: !0,
		specialAttackDescription:
			"Whiplash: Root for 2.5s, lower target's defense by 30% for 10s if not blocked",
		attackBonus: {
			[AttackBonus.PIERCE]: 48,
			[AttackBonus.SLASH]: 48,
			[AttackBonus.CRUSH]: 48,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 63,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 3.6,
		distance: 35,
		tier: 4,
		combatType: CombatType.MELEE,
		description: "A chainwhip made of adamantine, exceptional attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
	},
	{
		type: ChainWhipItem.AdamantineMasterwork,
		textureId: "chainwhip_adamantine",
		name: "Adamantine Chainwhip (Masterwork)",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: chainWhipWeaponStyles,
		hasSpecial: !0,
		specialAttackDescription:
			"Whiplash: Root for 4s, lower target's defense by 50% for 10s if not blocked",
		attackBonus: {
			[AttackBonus.PIERCE]: 57,
			[AttackBonus.SLASH]: 57,
			[AttackBonus.CRUSH]: 57,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 82,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 600,
		weight: 3.6,
		distance: 35,
		tier: 5,
		combatType: CombatType.MELEE,
		description:
			"A mastework chainwhip made of adamantine, exceptional attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.AdamantineMasterwork,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
		],
	},
	{
		type: StrongholdKeyItem.Armagnac,
		name: "Stronghold Key: Armagnac",
		description: "A key to the stronghold Armagnac",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: StrongholdKeyItem.Blackfort,
		name: "Stronghold Key: Blackfort",
		description: "A key to the stronghold Blackfort",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: StrongholdKeyItem.Bloodstone,
		name: "Stronghold Key: Bloodstone",
		description: "A key to the stronghold Bloodstone",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: StrongholdKeyItem.Dover,
		name: "Stronghold Key: Dover",
		description: "A key to the stronghold Dover",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: StrongholdKeyItem.Eyras,
		name: "Stronghold Key: Eyras",
		description: "A key to the stronghold Eyras",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: StrongholdKeyItem.Montblanc,
		name: "Stronghold Key: Montblanc",
		description: "A key to the stronghold Montblanc",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: StrongholdKeyItem.Thornhill,
		name: "Stronghold Key: Thornhill",
		description: "A key to the stronghold Thornhill",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: StrongholdKeyItem.Warwick,
		name: "Stronghold Key: Warwick",
		description: "A key to the stronghold Warwick",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		value: 10,
		destroyOnDeath: !0,
	},
	{
		type: RoyalLootItem.GoldOre,
		name: "Gold Ore",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		excludeFromTrade: !0,
		weight: 5,
		value: 10,
		royalTreasury: {
			baseFavorValue: 10,
		},
	},
	{
		type: RoyalLootItem.PileOfGems,
		name: "Pile of Gems",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		weight: 0.5,
		value: 10,
		excludeFromTrade: !0,
		royalTreasury: {
			baseFavorValue: 100,
		},
	},
	{
		type: RoyalLootItem.ArtifactTier1,
		name: "Artifact (T1)",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 1,
		equipmentSlot: null,
		weight: 0.1,
		value: 10,
		excludeFromTrade: !0,
		royalTreasury: {
			baseFavorValue: 60,
		},
	},
	{
		type: RoyalLootItem.ArtifactTier2,
		name: "Exquisite Artifact (T2)",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 2,
		equipmentSlot: null,
		value: 20,
		weight: 0.5,
		excludeFromTrade: !0,
		royalTreasury: {
			baseFavorValue: 150,
		},
	},
	{
		type: RoyalLootItem.ArtifactTier3,
		name: "Fabled Artifact (T3)",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 3,
		weight: 1,
		equipmentSlot: null,
		value: 30,
		excludeFromTrade: !0,
		royalTreasury: {
			baseFavorValue: 425,
		},
	},
	{
		type: RoyalLootItem.ArtifactTier4,
		name: "Otherworldly Artifact (T4)",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 4,
		weight: 1.5,
		equipmentSlot: null,
		value: 40,
		excludeFromTrade: !0,
		royalTreasury: {
			baseFavorValue: 2e3,
		},
	},
	{
		type: RoyalLootItem.ArtifactTier5,
		name: "UNH*LY ARTIF*CT (T5)",
		category: "material",
		fungible: !1,
		limit: 1,
		tier: 5,
		weight: 3,
		equipmentSlot: null,
		value: 50,
		excludeFromTrade: !0,
		royalTreasury: {
			baseFavorValue: 2e4,
		},
	},
	{
		type: RoyalLootItem.Curio,
		name: "Curio (T1)",
		category: "material",
		fungible: !1,
		limit: 1,
		equipmentSlot: null,
		weight: 0.1,
		value: 10,
		excludeFromTrade: !0,
		royalTreasury: {
			baseFavorValue: 75,
		},
	},
	{
		type: DefenderItem.Bronze,
		textureId: DefenderItem.Bronze,
		name: "Bronze Defender",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -8,
			[AttackBonus.SLASH]: 5,
			[AttackBonus.CRUSH]: 5,
			[AttackBonus.PIERCE]: 5,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -8,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		weight: 1,
		tier: 1,
		value: 100,
		description: "A defender made of bronze, minor attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Bronze,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Bronze,
				quantity: 2,
			},
		],
	},
	{
		type: DefenderItem.Iron,
		textureId: DefenderItem.Iron,
		name: "Iron Defender",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -12,
			[AttackBonus.SLASH]: 7,
			[AttackBonus.CRUSH]: 7,
			[AttackBonus.PIERCE]: 7,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 1,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -12,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 150,
		weight: 1.25,
		tier: 2,
		description: "A defender made of iron, moderate attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Iron,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 40,
			},
		],
	},
	{
		type: DefenderItem.Steel,
		textureId: DefenderItem.Steel,
		name: "Steel Defender",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -25,
			[AttackBonus.SLASH]: 13,
			[AttackBonus.CRUSH]: 13,
			[AttackBonus.PIERCE]: 13,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 4,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -25,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 200,
		weight: 1.5,
		tier: 3,
		description: "A defender made of steel, substantial attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 1,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 70,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 60,
			},
		],
	},
	{
		type: DefenderItem.Adamantine,
		textureId: DefenderItem.Adamantine,
		name: "Adamantine Defender",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -40,
			[AttackBonus.SLASH]: 20,
			[AttackBonus.CRUSH]: 20,
			[AttackBonus.PIERCE]: 20,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 5,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -40,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 300,
		weight: 1.75,
		tier: 4,
		description: "A defender made of adamantine, exceptional attack bonuses.",
		crafting: {
			materials: [
				{
					type: ShardItem.Adamantine,
					quantity: 1,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
			{
				skill: SkillType$1.Strength,
				level: 80,
			},
		],
	},
	{
		type: DefenderItem.Dragonsteel,
		textureId: DefenderItem.Dragonsteel,
		name: "Dragonsteel Defender",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -40,
			[AttackBonus.SLASH]: 25,
			[AttackBonus.CRUSH]: 25,
			[AttackBonus.PIERCE]: 25,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 6,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -40,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 1100,
		weight: 1.75,
		tier: 5,
		description: "A defender made of dragonsteel, legendary attack bonuses.",
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 90,
			},
			{
				skill: SkillType$1.Strength,
				level: 90,
			},
		],
	},
	{
		type: KiteShieldItem.Bronze,
		textureId: KiteShieldItem.Bronze,
		name: "Bronze Kiteshield",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -8,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -8,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 15,
			[DefenseBonus.SLASH]: 15,
			[DefenseBonus.CRUSH]: 15,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 14,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 100,
		weight: 2,
		tier: 1,
		description: "A kite shield made of bronze, minor melee defense.",
		crafting: {
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 2,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Bronze,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 10,
			},
			{
				skill: SkillType$1.Strength,
				level: 10,
			},
			{
				skill: SkillType$1.Defense,
				level: 10,
			},
		],
	},
	{
		type: KiteShieldItem.Iron,
		textureId: KiteShieldItem.Iron,
		name: "Iron Kiteshield",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -15,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -15,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 21,
			[DefenseBonus.SLASH]: 21,
			[DefenseBonus.CRUSH]: 21,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 20,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 150,
		weight: 2.5,
		tier: 2,
		description: "A kite shield made of iron, moderate melee defense.",
		crafting: {
			materials: [
				{
					type: BarItem.Iron,
					quantity: 2,
				},
				{
					type: MaterialItem.Log,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 60,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Iron,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 60,
			},
		],
	},
	{
		type: KiteShieldItem.Steel,
		textureId: KiteShieldItem.Steel,
		name: "Steel Kiteshield",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -25,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -25,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 44,
			[DefenseBonus.SLASH]: 44,
			[DefenseBonus.CRUSH]: 44,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 41,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 200,
		weight: 3,
		tier: 3,
		description: "A kite shield made of steel, substantial melee defense.",
		crafting: {
			materials: [
				{
					type: BarItem.Steel,
					quantity: 2,
				},
				{
					type: MaterialItem.OakLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 80,
			},
		],
	},
	{
		type: KiteShieldItem.Adamantine,
		textureId: KiteShieldItem.Adamantine,
		name: "Adamantine Kiteshield",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -40,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -40,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 53,
			[DefenseBonus.SLASH]: 53,
			[DefenseBonus.CRUSH]: 53,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 50,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 300,
		weight: 3.5,
		tier: 4,
		description: "A kite shield made of adamantine, exceptional melee defense.",
		crafting: {
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 2,
				},
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 90,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 2,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 90,
			},
		],
	},
	{
		type: KiteShieldItem.Wicket,
		textureId: "wicketshield",
		name: "Wicket Shield",
		category: "equipment",
		equipmentSlot: "offhand",
		attackBonus: {
			[AttackBonus.MAGIC]: -8,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: -2,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: -10,
			[DefenseBonus.SLASH]: -12,
			[DefenseBonus.CRUSH]: -14,
			[DefenseBonus.MAGIC]: 6,
			[DefenseBonus.RANGED]: 116,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 150,
		weight: 1.5,
		tier: 3,
		description: "A magical shield, exceptional ranged defense.",
		crafting: {
			materials: [
				{
					type: MaterialItem.MystbarkLog,
					quantity: 5,
				},
				{
					type: MaterialItem.Azurecloth,
					quantity: 1,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 45,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 50,
			},
		],
	},
	{
		type: BookItem.MagesBook,
		textureId: BookItem.MagesBook,
		name: "Mages Book",
		category: "equipment",
		equipmentSlot: "offhand",
		description: "Provides offensive and defensive magical capabilities.",
		attackBonus: {
			[AttackBonus.MAGIC]: 9,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 1,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
			[AttackBonus.RANGED]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 5,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 300,
		weight: 1,
		tier: 2,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Magic,
				level: 40,
			},
		],
	},
	{
		type: JavelinItem.Steel,
		textureId: JavelinItem.Steel,
		name: "Javelin",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		combatType: CombatType.RANGED,
		weaponStyles: javelinWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 51,
			[AttackBonus.SLASH]: 51,
			[AttackBonus.CRUSH]: 51,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 81,
			[AttackBonus.MELEE_STRENGTH]: 66,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		distance: 600,
		tier: 3,
		weight: 3.4,
		value: 400,
		description: "Heavy throwing spear, massive damage bonus against ranged.",
		crafting: {
			materials: [
				{
					type: ShardItem.Steel,
					quantity: 3,
				},
				{
					type: MaterialItem.Log,
					quantity: 10,
				},
				{
					type: MaterialItem.Thread,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 75,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Steel,
				quantity: 1,
			},
		],
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 60,
			},
			{
				skill: SkillType$1.Strength,
				level: 60,
			},
		],
	},
	{
		type: BoostItem.Focus,
		textureId: "focus_boost",
		name: "Focus Boost",
		description: "Restores Focus Points",
		category: "consumable",
		tier: 1,
		fungible: !0,
		equipmentSlot: null,
		consumableType: "focus",
		excludeFromTrade: !1,
		value: 1e3,
		weight: 1,
		limit: 1e3,
	},
	{
		type: RingItem.Lycian,
		textureId: "lycian_ring",
		name: "Lycian Ring",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 1e3,
		weight: 0.1,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 12,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: AmuletItem.Lycian,
		textureId: "lycian_amulet",
		name: "Lycian Amulet",
		category: "equipment",
		equipmentSlot: "amulet",
		fungible: !1,
		limit: 1,
		value: 1e3,
		weight: 0.1,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 32,
			[DefenseBonus.SLASH]: 30,
			[DefenseBonus.CRUSH]: 22,
			[DefenseBonus.MAGIC]: 10,
			[DefenseBonus.RANGED]: 30,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: AmuletItem.Wrath,
		textureId: "wrath_amulet",
		name: "Amulet of Wrath",
		category: "equipment",
		description: "Boosts attack and defense bonuses exceptionally",
		equipmentSlot: "amulet",
		fungible: !1,
		limit: 1,
		value: 1e3,
		tier: 3,
		weight: 0.1,
		attackBonus: {
			[AttackBonus.MAGIC]: 10,
			[AttackBonus.SLASH]: 10,
			[AttackBonus.CRUSH]: 10,
			[AttackBonus.PIERCE]: 10,
			[AttackBonus.RANGED]: 10,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 8,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 15,
			[DefenseBonus.SLASH]: 15,
			[DefenseBonus.CRUSH]: 15,
			[DefenseBonus.MAGIC]: 15,
			[DefenseBonus.RANGED]: 15,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: AmuletItem.Agony,
		textureId: "agony_amulet",
		name: "Amulet of Agony",
		category: "equipment",
		equipmentSlot: "amulet",
		description: "Boosts melee attack bonuses",
		fungible: !1,
		limit: 1,
		value: 1100,
		tier: 3,
		weight: 0.1,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 15,
			[AttackBonus.CRUSH]: 15,
			[AttackBonus.PIERCE]: 15,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 10,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Hitpoint,
				level: 75,
			},
		],
	},
	{
		type: AmuletItem.Power,
		textureId: "power_amulet",
		name: "Amulet of Power",
		category: "equipment",
		description: "Boosts attack and defense bonuses",
		equipmentSlot: "amulet",
		fungible: !1,
		limit: 1,
		value: 500,
		tier: 2,
		weight: 0.1,
		attackBonus: {
			[AttackBonus.MAGIC]: 6,
			[AttackBonus.SLASH]: 6,
			[AttackBonus.CRUSH]: 6,
			[AttackBonus.PIERCE]: 6,
			[AttackBonus.RANGED]: 6,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 6,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 6,
			[DefenseBonus.SLASH]: 6,
			[DefenseBonus.CRUSH]: 6,
			[DefenseBonus.MAGIC]: 6,
			[DefenseBonus.RANGED]: 6,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: AmuletItem.Strength,
		textureId: "strength_amulet",
		name: "Amulet of Strength",
		description: "Boosts melee strength",
		category: "equipment",
		equipmentSlot: "amulet",
		fungible: !1,
		limit: 1,
		value: 300,
		tier: 2,
		weight: 0.1,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 10,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: AmuletItem.Magic,
		textureId: "magic_amulet",
		name: "Amulet of Magic",
		description: "Boosts magic accuracy",
		category: "equipment",
		equipmentSlot: "amulet",
		fungible: !1,
		limit: 1,
		value: 300,
		tier: 2,
		weight: 0.1,
		attackBonus: {
			[AttackBonus.MAGIC]: 10,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: MeleeHelmItem.GoldObsidian,
		textureId: "goldobsidian_helm",
		name: "Obsidian Helm (g)",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -6,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 38,
			[DefenseBonus.SLASH]: 38,
			[DefenseBonus.CRUSH]: 38,
			[DefenseBonus.MAGIC]: -5,
			[DefenseBonus.RANGED]: 34,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "helm",
			materials: [
				{
					type: BarItem.Obsidian,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 90,
				},
			],
		},
		isFullHelm: !0,
		value: 1e3,
		tier: 5,
		weight: 5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 90,
			},
		],
	},
	{
		type: MeleeArmorItem.GoldObsidian,
		textureId: "goldobsidian_armor",
		name: "Obsidian Armor (g)",
		category: "equipment",
		equipmentSlot: "body",
		tier: 5,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 172,
			[DefenseBonus.SLASH]: 172,
			[DefenseBonus.CRUSH]: 172,
			[DefenseBonus.MAGIC]: -14,
			[DefenseBonus.RANGED]: 150,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Obsidian,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 95,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 1,
			},
		],
		value: 1e3,
		weight: 14,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 95,
			},
		],
	},
	{
		type: MeleeHelmItem.Obsidian,
		textureId: "obsidian_helm",
		name: "Obsidian Helm",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -6,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 38,
			[DefenseBonus.SLASH]: 38,
			[DefenseBonus.CRUSH]: 38,
			[DefenseBonus.MAGIC]: -5,
			[DefenseBonus.RANGED]: 34,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "helm",
			materials: [
				{
					type: BarItem.Obsidian,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 95,
				},
			],
		},
		isFullHelm: !0,
		value: 1e3,
		tier: 5,
		weight: 5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 95,
			},
		],
	},
	{
		type: MeleeArmorItem.Obsidian,
		textureId: "obsidian_armor",
		name: "Obsidian Armor",
		category: "equipment",
		equipmentSlot: "body",
		tier: 5,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 172,
			[DefenseBonus.SLASH]: 172,
			[DefenseBonus.CRUSH]: 172,
			[DefenseBonus.MAGIC]: -14,
			[DefenseBonus.RANGED]: 150,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Obsidian,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 95,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 1,
			},
		],
		value: 1e3,
		weight: 14,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 95,
			},
		],
	},
	{
		type: MeleeHelmItem.BlackObsidian,
		textureId: "blackobsidian_helm",
		name: "Obsidian Helm (b)",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -6,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 38,
			[DefenseBonus.SLASH]: 38,
			[DefenseBonus.CRUSH]: 38,
			[DefenseBonus.MAGIC]: -5,
			[DefenseBonus.RANGED]: 34,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "helm",
			materials: [
				{
					type: BarItem.Obsidian,
					quantity: 2,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 95,
				},
			],
		},
		isFullHelm: !0,
		value: 1e3,
		tier: 5,
		weight: 5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 95,
			},
		],
	},
	{
		type: MeleeArmorItem.BlackObsidian,
		textureId: "blackobsidian_armor",
		name: "Obsidian Armor (b)",
		category: "equipment",
		equipmentSlot: "body",
		tier: 5,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 172,
			[DefenseBonus.SLASH]: 172,
			[DefenseBonus.CRUSH]: 172,
			[DefenseBonus.MAGIC]: -14,
			[DefenseBonus.RANGED]: 150,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		smithing: {
			type: "armor",
			materials: [
				{
					type: BarItem.Obsidian,
					quantity: 5,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 95,
				},
			],
		},
		scrapping: {
			materials: [
				{
					type: BarItem.Adamantine,
					quantity: 1,
				},
			],
		},
		repairMaterials: [
			{
				name: BarItem.Adamantine,
				quantity: 1,
			},
		],
		value: 1e3,
		weight: 14,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 95,
			},
		],
	},
	{
		type: MeleeHelmItem.EliteCrownlands,
		textureId: "elitecrownlands_helm",
		name: "Elite Crownlands Helm",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -6,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 38,
			[DefenseBonus.SLASH]: 38,
			[DefenseBonus.CRUSH]: 38,
			[DefenseBonus.MAGIC]: -5,
			[DefenseBonus.RANGED]: 34,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		isFullHelm: !0,
		value: 1e3,
		tier: 6,
		weight: 5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 95,
			},
		],
	},
	{
		type: MeleeArmorItem.EliteCrownlands,
		textureId: "elitecrownlands_armor",
		name: "Elite Crownlands Armor",
		category: "equipment",
		equipmentSlot: "body",
		tier: 6,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -51,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 172,
			[DefenseBonus.SLASH]: 172,
			[DefenseBonus.CRUSH]: 172,
			[DefenseBonus.MAGIC]: -14,
			[DefenseBonus.RANGED]: 150,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		value: 2e3,
		weight: 14,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 95,
			},
		],
	},
	{
		type: MeleeArmorItem.Stone_T1,
		textureId: "stoneplate_t1_armor",
		name: "Stoneplate Armor",
		description: "Resists some poison, bleed, and burn.",
		category: "equipment",
		equipmentSlot: "body",
		tier: 3,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -85,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 63,
			[DefenseBonus.SLASH]: 63,
			[DefenseBonus.CRUSH]: 63,
			[DefenseBonus.MAGIC]: 24,
			[DefenseBonus.RANGED]: 50,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 30,
			[DefenseBonus.BLEED_RESIST]: 25,
			[DefenseBonus.BURN_RESIST]: 50,
		},
		fungible: !1,
		limit: 3,
		crafting: {
			materials: [
				{
					type: MaterialItem.StoneShard,
					quantity: 1,
				},
				{
					type: MaterialItem.BoarLeather,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.StoneShard,
				quantity: 1,
			},
		],
		value: 100,
		weight: 14,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 40,
			},
		],
	},
	{
		type: MeleeHelmItem.Stone_T1,
		textureId: "stoneplate_t1_helm",
		name: "Stoneplate Helm",
		description: "A stoneplate helm.",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -6,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 13,
			[DefenseBonus.SLASH]: 13,
			[DefenseBonus.CRUSH]: 13,
			[DefenseBonus.MAGIC]: 12,
			[DefenseBonus.RANGED]: 11,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		crafting: {
			materials: [
				{
					type: MaterialItem.StoneShard,
					quantity: 1,
				},
				{
					type: MaterialItem.BoarLeather,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 40,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.StoneShard,
				quantity: 1,
			},
		],
		isFullHelm: !0,
		value: 50,
		tier: 3,
		weight: 5,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 20,
			},
		],
	},
	{
		type: MeleeArmorItem.Stone_T2,
		textureId: "stoneplate_t2_armor",
		name: "Reinforced Stoneplate Armor",
		description: "Resists most poison, bleed, and burn.",
		category: "equipment",
		equipmentSlot: "body",
		tier: 4,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -85,
			[AttackBonus.RANGED]: -26,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 143,
			[DefenseBonus.SLASH]: 143,
			[DefenseBonus.CRUSH]: 143,
			[DefenseBonus.MAGIC]: 38,
			[DefenseBonus.RANGED]: 125,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 30,
			[DefenseBonus.BLEED_RESIST]: 25,
			[DefenseBonus.BURN_RESIST]: 50,
		},
		fungible: !1,
		limit: 1,
		crafting: {
			materials: [
				{
					type: MaterialItem.EnchantedStoneShard,
					quantity: 1,
				},
				{
					type: MaterialItem.BearLeather,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 80,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.EnchantedStoneShard,
				quantity: 1,
			},
		],
		value: 200,
		weight: 19,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 80,
			},
		],
	},
	{
		type: MeleeHelmItem.Stone_T2,
		textureId: "stoneplate_t2_helm",
		name: "Reinforced Stoneplate Helm",
		description: "A reinforced stoneplate helm",
		category: "equipment",
		equipmentSlot: "head",
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: -6,
			[AttackBonus.RANGED]: -3,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 32,
			[DefenseBonus.SLASH]: 32,
			[DefenseBonus.CRUSH]: 32,
			[DefenseBonus.MAGIC]: 12,
			[DefenseBonus.RANGED]: 28,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		crafting: {
			materials: [
				{
					type: MaterialItem.EnchantedStoneShard,
					quantity: 1,
				},
				{
					type: MaterialItem.BearLeather,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Crafting,
					level: 60,
				},
			],
		},
		repairMaterials: [
			{
				name: MaterialItem.EnchantedStoneShard,
				quantity: 1,
			},
		],
		isFullHelm: !0,
		value: 200,
		tier: 4,
		weight: 6,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Defense,
				level: 40,
			},
		],
	},
	{
		type: CannonballItem.T1,
		name: "Ballista Bolt",
		category: "material",
		equipmentSlot: null,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 65,
			[AttackBonus.RANGED]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		tier: 2,
		value: 5,
		weight: 0.002,
		limit: 1e3,
		smithing: {
			type: "ballista_bolt",
			materials: [
				{
					type: BarItem.Bronze,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 55,
				},
			],
		},
	},
	{
		type: CannonballItem.T2,
		name: "Weighted Ballista Bolt",
		category: "material",
		equipmentSlot: null,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 95,
			[AttackBonus.RANGED]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !0,
		tier: 3,
		value: 10,
		weight: 0.002,
		limit: 1e3,
		smithing: {
			type: "ballista_bolt",
			materials: [
				{
					type: BarItem.Iron,
					quantity: 1,
				},
			],
			requirements: [
				{
					name: SkillType$1.Smithing,
					level: 70,
				},
			],
		},
	},
	{
		type: RingItem.Family,
		textureId: "family_ring",
		name: "Family Ring",
		description: "A family ring.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 1,
		tier: 2,
		weight: 0.05,
		excludeFromTrade: !0,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 3,
			[AttackBonus.MELEE_STRENGTH]: 3,
			[AttackBonus.RANGED_STRENGTH]: 3,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: RingItem.Poison,
		textureId: "family_ring",
		name: "Ring of Poison Resist",
		description: "A poison ring.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 300,
		tier: 3,
		weight: 0.05,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 60,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: RingItem.Burn,
		textureId: "family_ring",
		name: "Ring of Burn Resist",
		description: "A burn ring.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 300,
		tier: 3,
		weight: 0.05,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 60,
		},
	},
	{
		type: RingItem.Bleed,
		textureId: "family_ring",
		name: "Ring of Bleed Resist",
		description: "A bleed ring.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 300,
		tier: 3,
		weight: 0.05,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 60,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: RingItem.SlayerBarrens,
		textureId: "slayer_ring",
		name: "Barrens Slayer Bracelet",
		description:
			"Increases all damage dealt by 5% to all monsters in the Barrens.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 1,
		weight: 0.05,
		excludeFromTrade: !0,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: RingItem.SlayerWastes,
		textureId: "slayer_wastes_ring",
		name: "Wastes Slayer Bracelet",
		description:
			"Increases all damage dealt by 5% to all monsters in the Wastes.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 1,
		weight: 0.05,
		excludeFromTrade: !0,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: RingItem.SlayerDarkForest,
		textureId: "slayer_darkforest_ring",
		name: "Dark Forest Slayer Bracelet",
		description:
			"Increases all damage dealt by 5% to all monsters in the Dark Forest.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 1,
		weight: 0.05,
		excludeFromTrade: !0,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: RingItem.Insight,
		textureId: "insight_ring",
		name: "Ring of Insight",
		description: "Gain ability to get Tome of Insight.",
		category: "equipment",
		equipmentSlot: "ring",
		fungible: !1,
		limit: 1,
		value: 1,
		weight: 0.05,
		excludeFromTrade: !1,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
	},
	{
		type: ShortswordItem.Heirloom,
		textureId: "shortsword_heirloom",
		name: "Heirloom Shortsword",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: shortswordWeaponStyles,
		excludeFromTrade: !0,
		attackBonus: {
			[AttackBonus.PIERCE]: 23,
			[AttackBonus.SLASH]: 23,
			[AttackBonus.CRUSH]: 23,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 27,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 2,
			[DefenseBonus.CRUSH]: 1,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		distance: 35,
		tier: 2,
		value: 1,
		weight: 2.6,
		combatType: CombatType.MELEE,
		description: "A heirloom short sword.",
	},
	{
		type: ShroomShakerItem.Standard,
		textureId: ShroomShakerItem.Standard,
		name: "Shroom Shaker",
		description: "A powerful ranged weapon that fires shroom charges.",
		value: 1500,
		weight: 6,
		category: "equipment",
		fungible: !1,
		hasSpecial: !1,
		limit: 1,
		equipmentSlot: "weapon",
		weaponStyles: handCannonStyles,
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.RANGED]: 90,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		distance: 1100,
		tier: 5,
		combatType: CombatType.RANGED,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Ranged,
				level: 70,
			},
		],
	},
	{
		type: ShroomChargeItem.Red,
		name: "Red Shroom Charge",
		description:
			"A Red Shroom Charge that deals damage to all entities in the hit area.",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 95,
			[AttackBonus.RANGED]: 0,
		},
		fungible: !0,
		tier: 3,
		value: 1,
		weight: 0.002,
		limit: 1e3,
	},
	{
		type: ShroomChargeItem.Yellow,
		name: "Yellow Shroom Charge",
		description:
			"A Yellow Shroom Charge that slows all entities in the hit area.",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 95,
			[AttackBonus.RANGED]: 0,
		},
		fungible: !0,
		tier: 3,
		value: 1,
		weight: 0.002,
		limit: 1e3,
	},
	{
		type: ShroomChargeItem.Black,
		name: "Black Shroom Charge",
		description:
			"A Black Shroom Charge that applies poison to all entities in the hit area.",
		category: "equipment",
		equipmentSlot: "ammo",
		attackBonus: {
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 95,
			[AttackBonus.RANGED]: 0,
		},
		fungible: !0,
		tier: 3,
		value: 1,
		weight: 0.002,
		limit: 1e3,
	},
	{
		type: JoltbladeItem.Megatur,
		textureId: "megatur_joltblade",
		name: "Megatur Joltblade",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 80,
			[AttackBonus.SLASH]: 80,
			[AttackBonus.CRUSH]: 80,
			[AttackBonus.MAGIC]: 5,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 80,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 95,
			},
		],
		value: 1100,
		weight: 2,
		tier: 5,
		combatType: CombatType.MELEE,
		description: "A massive megatur joltblade.",
		hasSpecial: !0,
		specialAttackDescription:
			"Disrupt - deals up to 160% of your melee max hit as magic damage",
		weaponStyles: swordWeaponStyles,
	},
	{
		type: StressItem.StrongAle,
		name: "Strong Ale",
		description: "A potion that decreases stress by 30",
		category: "consumable",
		consumableType: "stress",
		equipmentSlot: null,
		fungible: !0,
		excludeFromTrade: !0,
		destroyOnDeath: !0,
		tier: 1,
		value: 100,
		weight: 0.002,
		limit: 10,
	},
	{
		type: StressItem.LuckyCharm,
		name: "Lucky Charm",
		description: "Increases reward multiplier by 10% of current value",
		category: "consumable",
		consumableType: "stress",
		equipmentSlot: null,
		fungible: !0,
		excludeFromTrade: !0,
		destroyOnDeath: !0,
		tier: 1,
		value: 100,
		weight: 0.002,
		limit: 10,
	},
	{
		type: StressItem.RabbitFoot,
		name: "Rabbit Foot",
		description: "Increases reward multiplier by 500",
		category: "consumable",
		consumableType: "stress",
		equipmentSlot: null,
		fungible: !0,
		excludeFromTrade: !0,
		destroyOnDeath: !0,
		tier: 1,
		value: 100,
		weight: 0.002,
		limit: 10,
	},
	{
		type: MaulItem.Stone,
		textureId: MaulItem.Stone,
		name: "Stone Maul",
		description: "Use this to crush your enemies.",
		specialAttackDescription:
			"Quick Attack - Deals damage instantly when activated",
		category: "equipment",
		weaponStyles: warClubWeaponStyles,
		isTwoHanded: !0,
		fungible: !1,
		limit: 1,
		tier: 3,
		weight: 5,
		equipmentSlot: "weapon",
		attackBonus: {
			[AttackBonus.PIERCE]: 78,
			[AttackBonus.SLASH]: 78,
			[AttackBonus.CRUSH]: 78,
			[AttackBonus.MAGIC]: -4,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.MELEE_STRENGTH]: 77,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: -1,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		value: 400,
		equipLevelRequirements: [
			{
				skill: SkillType$1.Attack,
				level: 80,
			},
		],
		distance: 35,
		combatType: CombatType.MELEE,
		hasSpecial: !0,
	},
	{
		type: SpecialItem.FounderBaton,
		textureId: "founderbaton",
		name: "Founder Baton",
		category: "equipment",
		equipmentSlot: "weapon",
		weaponStyles: swordWeaponStyles,
		attackBonus: {
			[AttackBonus.PIERCE]: 0,
			[AttackBonus.SLASH]: 0,
			[AttackBonus.CRUSH]: 0,
			[AttackBonus.MAGIC]: 0,
			[AttackBonus.RANGED]: 0,
			[AttackBonus.MELEE_STRENGTH]: 0,
			[AttackBonus.MAGIC_STRENGTH]: 0,
			[AttackBonus.RANGED_STRENGTH]: 0,
		},
		defenseBonus: {
			[DefenseBonus.PIERCE]: 0,
			[DefenseBonus.SLASH]: 0,
			[DefenseBonus.CRUSH]: 0,
			[DefenseBonus.MAGIC]: 0,
			[DefenseBonus.RANGED]: 0,
			[DefenseBonus.TENACITY]: 0,
			[DefenseBonus.POISON_RESIST]: 0,
			[DefenseBonus.BLEED_RESIST]: 0,
			[DefenseBonus.BURN_RESIST]: 0,
		},
		fungible: !1,
		limit: 1,
		tier: 1,
		combatType: CombatType.MELEE,
		value: 1,
		weight: 2.1,
		description: "Founder merch",
		excludeFromTrade: !0,
	},
	{
		type: ClothingItem.FounderJacket,
		textureId: "founderjacket_clothing",
		name: "Founder Jacket",
		category: "equipment",
		fungible: !1,
		limit: 1,
		equipmentSlot: "body",
		value: 1,
		excludeFromTrade: !0,
	},
	{
		type: PotionItem.CleansingBalm,
		textureId: "cleansing_balm",
		name: "Cleansing Balm",
		description:
			"Instantly clears all crowd control effects and grants 5 seconds of CC immunity.",
		category: "consumable",
		consumableType: "cleanse",
		fungible: !1,
		equipmentSlot: null,
		value: 250,
		weight: 1.5,
		limit: 1e3,
	},
];

function ensureUniqueValuesByKey<T, K extends keyof T>(
	items: T[],
	key: K,
): T[] {
	const seenValues: Array<T[K]> = [];

	for (const item of items) {
		const value = item[key];
		if (seenValues.includes(value)) {
			throw new Error(
				`Duplicate values for key "${String(key)}" found in array: ${JSON.stringify(value)}`,
			);
		}
		seenValues.push(value);
	}

	return items;
}

const gameItemConfigs = ensureUniqueValuesByKey(itemConfigs, "type");
const gameItemConfigsMap = new Map(
	gameItemConfigs.map((item) => [item.type, item]),
);

export function getItemConfig(itemType: string) {
	const config = gameItemConfigsMap.get(itemType);
	return config || NullItemConfig;
}

const AnimationEntrySchema = z$6.object({
	duration: z$6.number(),
	tileid: z$6.number(),
});

const ITiledMapPropertySchema = z$6.object({
	name: z$6.string(),
	type: z$6.string(),
	value: z$6.union([
		z$6.string(),
		z$6.boolean(),
		z$6.number(),
		z$6.undefined(),
	]),
});

const ITileSchema = z$6.object({
	id: z$6.number(),
	animation: z$6.array(AnimationEntrySchema).optional(),
	type: z$6.string().optional(),
	properties: z$6.array(ITiledMapPropertySchema).optional(),
});
const ITiledTileSetSchema = z$6.object({
	columns: z$6.number(),
	firstgid: z$6.number(),
	image: z$6.string(),
	imageheight: z$6.number(),
	imagewidth: z$6.number(),
	margin: z$6.number(),
	name: z$6.string(),
	spacing: z$6.number(),
	tilecount: z$6.number(),
	tileheight: z$6.number(),
	tilewidth: z$6.number(),
	tiles: z$6.array(ITileSchema).optional(),
});

const PositionInterfaceSchema = z$6.object({
	x: z$6.number(),
	y: z$6.number(),
});

const SizeInterfaceSchema = z$6.object({
	width: z$6.number(),
	height: z$6.number(),
});

enum LayerDepth {
	AbovePlayer = "abovePlayer",
	BelowPlayer = "belowPlayer",
}

export const MapConfigSchema = z$6.object({
	tilesets: z$6.array(ITiledTileSetSchema),
	nbChunks: PositionInterfaceSchema,
	chunkSize: SizeInterfaceSchema,
	mapSize: SizeInterfaceSchema,
	objectTypes: z$6.array(z$6.string()),
	tileLayersDepth: z$6.record(z$6.nativeEnum(LayerDepth)),
});

function getAllObjectTypes<T extends string>(ln: T, sn: string[]) {
	const cn = [];
	for (const pn of sn) cn.push(`${ln}_${pn}`);
	return cn;
}

export enum MapObjectType {
	Altar = "altar",
	Throne = "throne",
	FishingSpot = "fishingSpot",
	StrongholdChest = "strongholdChest",
	GuildChest = "guildChest",
	WildsChest = "wildsChest",
	EssenceLeaderboard = "essenceLeaderboard",
	LumberMill = "lumberMill",
	MiningSpot = "miningSpot",
	GoldMine = "goldMine",
	HerbSpot = "herbSpot",
	FiberHerbSpot = "fiberHerbSpot",
	Anvil = "anvil",
	MysteryObject = "mysteryObject",
	Chair = "chair",
	TempleGate = "templeGate",
	CityGate = "cityGate",
	StrongholdGate = "strongholdGate",
	GroundItem = "groundItem",
	RestorationAltar = "restorationAltar",
	Tree = "tree",
	CraftingTable = "craftingTable",
	Wagon = "wagon",
	CookingTable = "cookingTable",
	DuelStatue = "duelStatue",
	BathSlide = "BathhouseSlideTeleportInside",
	BathPipe = "BathhousePipeTeleportOutside",
	Obelisk = "obelisk",
	VisionOrb = "visionOrb",
	CrackerMachine = "crackerMachine",
	CoinPile = "CoinPile",
	TreasureChest = "treasureChest",
	AlchemyTable = "alchemy",
	ThievingStall = "thievingStall",
	BlastTreasureChest = "blastTreasureChest",
	CagedCoinPile = "CageCoinPIle",
	MiningSpotSpawn = "dynamicMiningSpot",
	FiberHerbSpawn = "dynamicFiberHerbSpot",
	RockPile = "rockPile",
	ScrappingTable = "scrappingTable",
	Barricade = "barricade",
	TeleportPortal = "teleportPortal",
	CentralPortal = "centralPortal",
	Trap = "trap",
	DungeonEntrance = "dungeonEntrance",
	DungeonExit = "dungeonExit",
	LodeStone = "loadstone",
	StrongholdMinesEntrance = "strongholdminesEntrance",
	StrongholdMinesExit = "strongholdminesExit",
	PlanningTable = "planningTable",
	EngineeringTable = "engineeringTable",
	ExcaliburStone = "excaliburStone",
	AgilityShortcut = "agilityShortcut",
	Cannon = "cannon",
	ShroomAltar = "shroomAltar",
	SkillBulletin = "skillLeaderboard",
	PoisonTable = "poisonTable",
	EnergyAltar = "energyAltar",
	GuildLeaderboard = "guildLeaderboard",
	Campfire = "campfire",
	RewardDispenser = "rewardDispenser",
	RoyalFavorLeaderboard = "royalFavorLeaderboard",
	LootBag = "lootBag",
}

export enum TreeClusterType {
	Swamp = "swamp",
	Dead = "dead",
	Plain = "plain",
	Alpha = "alpha",
	Beta = "beta",
	Enchanted = "enchanted",
	LargeT2 = "larget2",
}

export enum MiningSpotType {
	Copper = "copper",
	Tin = "tin",
	Coal = "coal",
	Iron = "iron",
	Adamantine = "adamantine",
	Luminescent = "luminescent",
	Obsidian = "obsidian",
}

export enum TeleportPortalType {
	CAPITAL_CITY = "capitalCity",
	NEW_MORTIS = "newMortis",
}

export enum TrapType {
	Poison = "poison",
	TreeSpring = "treeSpring",
	Pit = "pit",
}

export const DEFAULT_FACTORIES = [
	...getAllObjectTypes(MapObjectType.Tree, Object.values(TreeClusterType)),
	...getAllObjectTypes(MapObjectType.MiningSpot, Object.values(MiningSpotType)),
	...getAllObjectTypes(
		MapObjectType.TeleportPortal,
		Object.values(TeleportPortalType),
	),
	...getAllObjectTypes(
		MapObjectType.FiberHerbSpot,
		Object.values(FiberHerbType),
	),
	...getAllObjectTypes(MapObjectType.Trap, Object.values(TrapType)),
	...getAllObjectTypes(MapObjectType.Trap, Object.values(TrapType)),
	MapObjectType.Barricade,
	MapObjectType.Cannon,
	MapObjectType.Campfire,
	MapObjectType.LootBag,
];

const DUEL_ARENA_OBJECT_MAP = {
	essenceLeaderboard: !0,
	chair: !0,
	groundItem: !0,
	duelStatue: !0,
	BathhouseSlideTeleportInside: !0,
	BathhousePipeTeleportOutside: !0,
	visionOrb: !0,
	CoinPile: !0,
	CageCoinPIle: !0,
	altar: !1,
	throne: !1,
	fishingSpot: !1,
	strongholdChest: !1,
	lumberMill: !1,
	miningSpot: !1,
	goldMine: !1,
	herbSpot: !1,
	fiberHerbSpot: !1,
	anvil: !1,
	mysteryObject: !1,
	templeGate: !1,
	cityGate: !1,
	strongholdGate: !1,
	restorationAltar: !1,
	tree: !1,
	craftingTable: !1,
	wagon: !1,
	cookingTable: !1,
	obelisk: !1,
	crackerMachine: !1,
	treasureChest: !1,
	alchemy: !1,
	skillLeaderboard: !1,
	thievingStall: !0,
	blastTreasureChest: !0,
	dynamicMiningSpot: !1,
	dynamicFiberHerbSpot: !1,
	rockPile: !1,
	scrappingTable: !1,
	barricade: !1,
	teleportPortal: !1,
	centralPortal: !1,
	trap: !1,
	dungeonEntrance: !1,
	dungeonExit: !1,
	loadstone: !1,
	strongholdminesEntrance: !1,
	strongholdminesExit: !1,
	planningTable: !1,
	engineeringTable: !1,
	excaliburStone: !0,
	agilityShortcut: !1,
	cannon: !1,
	shroomAltar: !1,
	poisonTable: !1,
	guildChest: !1,
	wildsChest: !1,
	energyAltar: !1,
	guildLeaderboard: !1,
	campfire: !1,
	rewardDispenser: !1,
	royalFavorLeaderboard: !1,
	lootBag: !1,
};

enum FishingSpotVariant {
	STANDARD = "standard",
	BARRENLANDS = "barrenlands",
	BEACH = "beach",
	CAVERN = "cavern",
	SWAMP = "swamp",
}

function extractGameObjectEssentials(ln: { id: string; x: number; y: number }) {
	const sn = ln.id;
	const cn = ln.x;
	const pn = ln.y;

	return !sn || !cn || !pn
		? [void 0, void 0]
		: [
				{
					x: cn,
					y: pn,
				},
				String(sn),
			];
}

/**
 * Фабрика для создания и управления объектами рыболовных мест
 */
class FishingSpotFactory {
	/** Подтип объекта */
	private subtype: string;
	/** Кэшированные варианты рыболовных мест */
	private cachedFishingSpotVariants: any[];

	/**
	 * Создает экземпляр фабрики рыболовных мест
	 * @param subtype - Подтип объекта
	 */
	constructor(subtype: string) {
		this.subtype = subtype;
		this.cachedFishingSpotVariants = Object.values(FishingSpotVariant);
	}

	/**
	 * Фабричный метод для создания объекта рыболовного места
	 * @param objectData - Данные объекта
	 * @param config - Конфигурация объекта
	 * @returns Созданный объект рыболовного места или undefined в случае ошибки
	 */
	factory(objectData: { id: string; x: number; y: number }, config: any): any {
		const [position, properties] = extractGameObjectEssentials(objectData);
		if (!position || !properties) {
			console.error("Error during fishing spot creation");
			return;
		}
		// return new FishingSpot(
		// 	config,
		// 	position,
		// 	properties,
		// 	getAnimationKey$9(config.variant),
		// );
	}
}

class GuildChestFactory {
	private subtype: string;

	constructor(sn: string) {
		this.subtype = sn;
	}

	factory(sn: { id: string; x: number; y: number }, cn: any) {
		const [pn, hn] = extractGameObjectEssentials(sn);
		if (!pn || !hn) {
			console.error("Error during guildChest creation");
			return;
		}
		// return new GuildChest(cn, pn, hn, spriteKey$5);
	}
}

const factoriesMap = {
	// [MapObjectType.Throne]: ln => new ThroneFactory(ln),
	// [MapObjectType.Altar]: ln => new AltarFactory(ln),
	// [MapObjectType.RestorationAltar]: ln => new RestorationAltarFactory(ln),
	[MapObjectType.FishingSpot]: (ln: string) => new FishingSpotFactory(ln),
	// [MapObjectType.StrongholdChest]: ln => new StrongholdChestFactory(ln),
	// [MapObjectType.SkillBulletin]: ln => new SkillBulletinFactory(ln),
	// [MapObjectType.EssenceLeaderboard]: ln => new EssenceLeaderboardFactory(ln),
	// [MapObjectType.LumberMill]: ln => new LumberMillFactory(ln),
	// [MapObjectType.MiningSpot]: ln => new MiningSpotFactory(ln),
	// [MapObjectType.HerbSpot]: ln => new HerbFactory(ln),
	// [MapObjectType.FiberHerbSpot]: ln => new FiberHerbFactory(ln),
	// [MapObjectType.Anvil]: ln => new AnvilFactory(ln),
	// [MapObjectType.MysteryObject]: ln => new MysteryObjectFactory(ln),
	// [MapObjectType.Chair]: ln => new ChairFactory(ln),
	// [MapObjectType.TempleGate]: ln => new TemplateGateFactory(ln),
	// [MapObjectType.CityGate]: ln => new CityGateFactory(ln),
	// [MapObjectType.StrongholdGate]: ln => new StrongholdGateFactory(ln),
	// [MapObjectType.CraftingTable]: ln => new CraftingTableFactory(ln),
	// [MapObjectType.CookingTable]: ln => new CookingTableFactory(ln),
	// [MapObjectType.AlchemyTable]: ln => new AlchemyTableFactory(ln),
	// [MapObjectType.DuelStatue]: ln => new DuelStatueFactory(ln),
	// [MapObjectType.Tree]: ln => new TreeFactory(ln),
	// [MapObjectType.BathSlide]: ln => new BathSlideFactory(ln),
	// [MapObjectType.BathPipe]: ln => new BathPipeFactory(ln),
	// [MapObjectType.Obelisk]: ln => new ObeliskFactory(ln),
	// [MapObjectType.VisionOrb]: ln => new VisionOrbFactory(ln),
	// [MapObjectType.CrackerMachine]: ln => new CrackerMachineFactory(ln),
	// [MapObjectType.CoinPile]: ln => new CoinPileFactory(ln),
	// [MapObjectType.TreasureChest]: ln => new TreasureChestFactory(ln),
	// [MapObjectType.ThievingStall]: ln => new ThievingStallFactory(ln),
	// [MapObjectType.BlastTreasureChest]: ln => new BlastTreasureChestFactory(ln),
	// [MapObjectType.CagedCoinPile]: ln => new CagedCoinPileFactory(ln),
	// [MapObjectType.RockPile]: ln => new RockPileFactory(ln),
	// [MapObjectType.ScrappingTable]: ln => new ScrappingTableFactory(ln),
	// [MapObjectType.Barricade]: ln => new BarricadeFactory(ln),
	// [MapObjectType.TeleportPortal]: ln => new TeleportPortalFactory(ln),
	// [MapObjectType.CentralPortal]: ln => new CentralPortalFactory(ln),
	// [MapObjectType.Trap]: ln => new TrapFactory(ln),
	// [MapObjectType.DungeonEntrance]: ln => new DungeonEntranceFactory(ln),
	// [MapObjectType.DungeonExit]: ln => new DungeonExitFactory(ln),
	// [MapObjectType.LodeStone]: ln => new LodeStoneFactory(ln),
	// [MapObjectType.StrongholdMinesEntrance]: ln => new StrongholdMinesEntranceFactory(ln),
	// [MapObjectType.StrongholdMinesExit]: ln => new StrongholdMinesExitFactory(ln),
	// [MapObjectType.PlanningTable]: ln => new PlanningTableFactory(ln),
	// [MapObjectType.GoldMine]: ln => new GoldMineFactory(ln),
	// [MapObjectType.EngineeringTable]: ln => new EngineeringTableFactory(ln),
	// [MapObjectType.ExcaliburStone]: ln => new ExcaliburStoneFactory(ln),
	// [MapObjectType.ShroomAltar]: ln => new ShroomAltarFactory(ln),
	// [MapObjectType.AgilityShortcut]: ln => new AgilityShortcutFactory(ln),
	// [MapObjectType.Cannon]: ln => new CannonFactory(ln),
	// [MapObjectType.PoisonTable]: ln => new PoisonTableFactory(ln),
	[MapObjectType.GuildChest]: (ln: string) => new GuildChestFactory(ln),
	// [MapObjectType.WildsChest]: ln => new WildsChestFactory(ln),
	// [MapObjectType.EnergyAltar]: ln => new EnergyAltarFactory(ln),
	// [MapObjectType.GuildLeaderboard]: ln => new GuildLeaderboardFactory(ln),
	// [MapObjectType.Campfire]: ln => new CampfireFactory(ln),
	// [MapObjectType.RewardDispenser]: ln => new RewardDispenserFactory(ln),
	// [MapObjectType.RoyalFavorLeaderboard]: ln => new RoyalFavorLeaderboardFactory(ln),
	// [MapObjectType.LootBag]: ln => new LootbagFactory(ln),
	// [MapObjectType.Wagon]: void 0,
	// [MapObjectType.GroundItem]: void 0,
	// [MapObjectType.MiningSpotSpawn]: void 0,
	// [MapObjectType.FiberHerbSpawn]: void 0
} as const;

function isDuelArenaObject(ln: keyof typeof DUEL_ARENA_OBJECT_MAP) {
	return DUEL_ARENA_OBJECT_MAP[ln];
}

// const configGetterMap = {
// 	// [MapObjectType.Altar]: getAltarConfig,
// 	// [MapObjectType.Anvil]: getAnvilConfig,
// 	// [MapObjectType.CityGate]: getCityGateConfig,
// 	[MapObjectType.FishingSpot]: getFishingSpotConfig,
// 	// [MapObjectType.EssenceLeaderboard]: getEssenceLeaderboardConfig,
// 	// [MapObjectType.LumberMill]: getLumberMillConfig,
// 	// [MapObjectType.HerbSpot]: getHerbSpotConfig,
// 	// [MapObjectType.FiberHerbSpot]: FiberHerbConfigGetter.fromObject.bind(void 0),
// 	// [MapObjectType.MiningSpot]: MiningSpotConfigGetter.fromObject.bind(void 0),
// 	// [MapObjectType.MysteryObject]: getMysteryObjectConfig,
// 	// [MapObjectType.StrongholdGate]: getStrongholdGateConfig,
// 	// [MapObjectType.Wagon]: getWagonConfig,
// 	// [MapObjectType.StrongholdChest]: getStrongholdChestConfig,
// 	// [MapObjectType.TempleGate]: getTempleGateConfig,
// 	// [MapObjectType.Throne]: getThroneConfig,
// 	// [MapObjectType.RestorationAltar]: getRestorationAltarConfig,
// 	// [MapObjectType.Tree]: getTreeConfig,
// 	// [MapObjectType.GroundItem]: getGroundItemConfig,
// 	// [MapObjectType.Chair]: getChairConfig,
// 	// [MapObjectType.CraftingTable]: getCraftingTableConfig,
// 	// [MapObjectType.CookingTable]: getCookingTableConfig,
// 	// [MapObjectType.AlchemyTable]: getAlchemyTableConfig,
// 	// [MapObjectType.DuelStatue]: getDuelStatueConfig,
// 	// [MapObjectType.BathPipe]: getBathPipeConfig,
// 	// [MapObjectType.BathSlide]: getBathSlideConfig,
// 	// [MapObjectType.Obelisk]: getObeliskConfig,
// 	// [MapObjectType.VisionOrb]: getVisionOrbConfig,
// 	// [MapObjectType.CrackerMachine]: getCrackerMachineConfig,
// 	// [MapObjectType.CoinPile]: getCoinPileConfig,
// 	// [MapObjectType.TreasureChest]: getTreasureChestConfig,
// 	// [MapObjectType.SkillBulletin]: getSkillBulletinConfig,
// 	// [MapObjectType.ThievingStall]: getThievingStallConfig,
// 	// [MapObjectType.BlastTreasureChest]: getBlastTreasureChestConfig,
// 	// [MapObjectType.CagedCoinPile]: getCagedCoinPileConfig,
// 	// [MapObjectType.MiningSpotSpawn]: getDynamicMiningSpotSpawnConfig,
// 	// [MapObjectType.FiberHerbSpawn]: getDynamicFiberHerbSpawnConfig,
// 	// [MapObjectType.RockPile]: getRockPileConfig,
// 	// [MapObjectType.ScrappingTable]: getScrappingTableConfig,
// 	// [MapObjectType.Barricade]: getBarricadeConfig,
// 	// [MapObjectType.TeleportPortal]: TeleportPortalConfigGetter.fromObject.bind(
// 	// 	void 0,
// 	// ),
// 	// [MapObjectType.CentralPortal]: getCentralPortalConfig,
// 	// [MapObjectType.Trap]: TrapConfigGetter.fromObject.bind(void 0),
// 	// [MapObjectType.DungeonEntrance]: getDungeonEntranceConfig,
// 	// [MapObjectType.DungeonExit]: getDungeonExitConfig,
// 	// [MapObjectType.LodeStone]: LodeStoneConfigGetter.fromObject.bind(void 0),
// 	// [MapObjectType.StrongholdMinesEntrance]: getStrongholdMinesEntranceConfig,
// 	// [MapObjectType.StrongholdMinesExit]: getStrongholdMinesExitConfig,
// 	// [MapObjectType.PlanningTable]: getPlanningTableConfig,
// 	// [MapObjectType.GoldMine]: getGoldMineConfig,
// 	// [MapObjectType.EngineeringTable]: getEngineeringTableConfig,
// 	// [MapObjectType.ExcaliburStone]: getExcaliburStoneConfig,
// 	// [MapObjectType.ShroomAltar]: getShroomAltarConfig,
// 	// [MapObjectType.AgilityShortcut]: getAgilityShortcutConfig,
// 	// [MapObjectType.Cannon]: getCannonConfig,
// 	// [MapObjectType.PoisonTable]: getPoisonTableConfig,
// 	[MapObjectType.GuildChest]: getGuildChestConfig,
// 	// [MapObjectType.WildsChest]: getWildsChestConfig,
// 	// [MapObjectType.EnergyAltar]: getEnergyAltarConfig,
// 	// [MapObjectType.GuildLeaderboard]: getGuildLeaderboardConfig,
// 	// [MapObjectType.Campfire]: getCampfireConfig,
// 	// [MapObjectType.RewardDispenser]: getRewardDispesnerConfig,
// 	// [MapObjectType.RoyalFavorLeaderboard]: getRoyalFavorLeaderboardConfig,
// 	// [MapObjectType.LootBag]: getLootBagConfig,
// };

// const guildChestConfig = {
// 	objectType: MapObjectType.GuildChest,
// 	name: ObjectName.GuildChest,
// 	collisionConfig: {
// 		collisionTileSize: {
// 			width: 2,
// 			height: 2,
// 		},
// 		collisionAlignment: Alignment.Bottom,
// 		collisionType: CollisionType.Static,
// 		addOnLoad: !0,
// 	},
// 	interactionAreaRect: [-32, -32, 64, 64],
// 	interactionPositionOffset: {
// 		x: 0,
// 		y: 35,
// 	},
// 	interactionPositionConfig: {
// 		interactionSides: getAllInteractionSidesTrue(),
// 		disableCornerInteraction: !0,
// 	},
// };

export enum ObeliskType {
	DarkForest = "darkForest",
	Encampment = "encampment",
	DeepHole = "deepHole",
	LandBridge = "landBridge",
}

export enum AltarType {
	Fire = "fire",
	Frost = "frost",
	Earth = "earth",
	Wind = "wind",
	Void = "void",
	Bone = "bone",
}

export enum ThroneType {
	Capital = "capital",
	Stronghold = "stronghold",
}

export enum MysteryObjectType {
	Vase = "vase",
	Barrel = "barrel",
	Box = "box",
	Pile = "pile",
	Cart = "cart",
	BarrensGravestone = "barrensgravestone",
	DarkforestEffigy = "darkforesteffigy",
	DarkforestRitual = "darkforestritual",
	MiningDungeonCart = "miningdungeoncart",
	SwampUrn = "swampurn",
	WastesVoidCrystal = "wastesvoidcrystal",
}

export enum TempleGateType {
	South = "south",
	West = "west",
}

export enum CityGateType {
	North = "north",
	South = "south",
}

export enum ThievingStallType {
	RedStall = "redStall",
	BlueStall = "blueStall",
	GreenStall = "greenStall",
	RedWideStall = "redWideStall",
	BlueWideStall = "blueWideStall",
}

export enum EssenceLeaderboardType {
	DuelArena = "duelarena",
	GoldRush = "goldrush",
}

export enum LodeStoneType {
	Capital = "capital",
	NewMortis = "newmortis",
	DarkForest = "darkforest",
}

export enum DynamicSpawnType {
	TIER_3 = "t3",
	TIER_4 = "t4",
	TIER_5 = "t5",
}

export enum DungeonEntranceType {
	Small = "small",
	Large = "large",
}

export enum TreasureChestType {
	Swamp = "swamp",
	Barrenlands = "barrenlands",
	Wilderness = "wilderness",
	DarkForest = "darkforest",
}

export enum GoldMineType {
	VARIANT_1 = "1",
	VARIANT_2 = "2",
	VARIANT_3 = "3",
}

export enum AgilityShortcutType {
	Pipe = "pipe",
	Tunnel00 = "tunnel00",
	Tunnel01 = "tunnel01",
	BalanceLog = "balancelog",
	Catapult = "catapult",
	ExitLog = "exitlog",
	RockSkipping = "rockSkipping",
	Swing = "swing",
	CourseEntrance = "courseentrance",
	CourseExit = "courseExit",
	AgilityMinesExit = "agilityMinesExit",
	AgilityMinesEntrance = "agilityMinesEntrance",
	MorkulEntrance = "morkulEntrance",
	MorkulExit = "morkulExit",
}

function isObeliskType(ln: string): boolean {
	return Object.values(ObeliskType).includes(ln as ObeliskType);
}
function isAltarType(ln: string): boolean {
	return Object.values(AltarType).includes(ln as AltarType);
}
function isThroneType(ln: string): boolean {
	return Object.values(ThroneType).includes(ln as ThroneType);
}
function isMysteryObjectType(ln: string): boolean {
	return Object.values(MysteryObjectType).includes(ln as MysteryObjectType);
}
function isTempleGateType(ln: string): boolean {
	return Object.values(TempleGateType).includes(ln as TempleGateType);
}
function isCityGateType(ln: string): boolean {
	return Object.values(CityGateType).includes(ln as CityGateType);
}
function isMiningSpotType(ln: string): boolean {
	return Object.values(MiningSpotType).includes(ln as MiningSpotType);
}
function isHerbType(ln: string): boolean {
	return Object.values(HerbType).includes(ln as HerbType);
}
function isFiberHerbType(ln: string): boolean {
	return Object.values(FiberHerbType).includes(ln as FiberHerbType);
}
function isTreeClusterType(ln: string): boolean {
	return Object.values(TreeClusterType).includes(ln as TreeClusterType);
}
function isThievingStallType(ln: string): boolean {
	return Object.values(ThievingStallType).includes(ln as ThievingStallType);
}
function isEssenceLeaderboardType(ln: string): boolean {
	return Object.values(EssenceLeaderboardType).includes(
		ln as EssenceLeaderboardType,
	);
}
function isLodeStoneType(ln: string): boolean {
	return Object.values(LodeStoneType).includes(ln as LodeStoneType);
}
function isDefaultType(ln: string): boolean {
	return ln === "default";
}
function isDynamicSpawnType(ln: string): boolean {
	return Object.values(DynamicSpawnType).includes(ln as DynamicSpawnType);
}
function isTeleportPortalType(ln: string): boolean {
	return Object.values(TeleportPortalType).includes(ln as TeleportPortalType);
}
function isTrapType(ln: string): boolean {
	return Object.values(TrapType).includes(ln as TrapType);
}
function isDungeonEntranceType(ln: string): boolean {
	return Object.values(DungeonEntranceType).includes(ln as DungeonEntranceType);
}
function isTreasureChestType(ln: string): boolean {
	return Object.values(TreasureChestType).includes(ln as TreasureChestType);
}
function isGoldMineType(ln: string): boolean {
	return Object.values(GoldMineType).includes(ln as GoldMineType);
}
function isAgilityShortcutType(ln: string): boolean {
	return Object.values(AgilityShortcutType).includes(ln as AgilityShortcutType);
}

export const subtypeTypeGuardsMap = {
	altar: isAltarType,
	anvil: isDefaultType,
	chair: isDefaultType,
	cityGate: isCityGateType,
	fishingSpot: isDefaultType,
	essenceLeaderboard: isEssenceLeaderboardType,
	groundItem: isDefaultType,
	herbSpot: isHerbType,
	fiberHerbSpot: isFiberHerbType,
	lumberMill: isDefaultType,
	miningSpot: isMiningSpotType,
	mysteryObject: isMysteryObjectType,
	wagon: isDefaultType,
	restorationAltar: isDefaultType,
	strongholdGate: isDefaultType,
	strongholdChest: isDefaultType,
	templeGate: isTempleGateType,
	throne: isThroneType,
	tree: isTreeClusterType,
	craftingTable: isDefaultType,
	cookingTable: isDefaultType,
	alchemy: isDefaultType,
	duelStatue: isDefaultType,
	BathhousePipeTeleportOutside: isDefaultType,
	BathhouseSlideTeleportInside: isDefaultType,
	obelisk: isObeliskType,
	visionOrb: isDefaultType,
	crackerMachine: isDefaultType,
	CoinPile: isDefaultType,
	treasureChest: isTreasureChestType,
	skillLeaderboard: isDefaultType,
	thievingStall: isThievingStallType,
	blastTreasureChest: isDefaultType,
	CageCoinPIle: isDefaultType,
	dynamicMiningSpot: isDynamicSpawnType,
	dynamicFiberHerbSpot: isDynamicSpawnType,
	rockPile: isDefaultType,
	scrappingTable: isDefaultType,
	barricade: isDefaultType,
	teleportPortal: isTeleportPortalType,
	centralPortal: isDefaultType,
	trap: isTrapType,
	dungeonEntrance: isDungeonEntranceType,
	dungeonExit: isDefaultType,
	loadstone: isLodeStoneType,
	strongholdminesEntrance: isDefaultType,
	strongholdminesExit: isDefaultType,
	planningTable: isDefaultType,
	goldMine: isGoldMineType,
	engineeringTable: isDefaultType,
	excaliburStone: isDefaultType,
	shroomAltar: isDefaultType,
	agilityShortcut: isAgilityShortcutType,
	cannon: isDefaultType,
	poisonTable: isDefaultType,
	guildChest: isDefaultType,
	wildsChest: isDefaultType,
	energyAltar: isDefaultType,
	guildLeaderboard: isDefaultType,
	campfire: isDefaultType,
	rewardDispenser: isDefaultType,
	royalFavorLeaderboard: isDefaultType,
	lootBag: isDefaultType,
};

export function enumFromStringValue<T extends string>(
	enumType: Record<string, T>,
	value: string,
): T | undefined {
	return Object.values(enumType).includes(value as T)
		? (value as T)
		: undefined;
}

export function parseObjectTypeData(
	ln: string | undefined,
): { type: MapObjectType; subtype: string } | undefined {
	if (!ln) return;

	let [sn, cn] = ln.split("_");

	// Handle special case for altar_restoration
	if (ln === "altar_restoration") {
		sn = "altar_restoration";
		cn = "default";
	}

	if (!sn) return;

	const pn = enumFromStringValue(MapObjectType, sn);
	if (!pn) return;

	const hn = cn === void 0 ? "default" : cn;
	const gn = subtypeTypeGuardsMap[pn];

	if (gn(hn)) {
		return {
			type: pn,
			subtype: hn,
		};
	}
}

export async function handleLoginStage(
	bot: Bot<any, any, any, any>,
	stage: number,
): Promise<void> {
	let attempts = 0;
	let success = false;

	while (attempts < 3 && !success) {
		attempts++;

		try {
			const response = await bot.sendRequest(
				ClientRequest.LoginRequestPackets,
				stage,
			);

			if (response === undefined || response?.error) {
				throw new Error(`Error processing packet for stage: ${stage}`);
			}

			// console.log(
			// 	`Sent and received response for stage: ${stage} on attempt ${attempts}`,
			// );
			success = true;
		} catch (error) {}
	}
}

export const ClientMessageSettings = {
	[ClientMessage.Emote]: {
		payload: z$6.object({
			emote: z$6.nativeEnum(Emote),
		}),
		throttle: 3e3,
	},
	[ClientMessage.MoveTo]: {
		payload: PositionSchema,
		throttle: 0,
	},
	[ClientMessage.Follow]: {
		payload: WalletAddressSchema,
	},
	[ClientMessage.AttackTo]: {
		payload: WalletAddressSchema,
		throttle: 0,
	},
	[ClientMessage.AttackToNpc]: {
		payload: z$6.string(),
		throttle: 0,
	},
	[ClientMessage.InteractObject]: {
		payload: z$6.string(),
	},
	[ClientMessage.ConsumeFood]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.ConsumePotion]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.ConsumeCleansingBalm]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.ConsumeDrug]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.ConsumeBones]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.ConsumeOre]: {
		payload: ItemIdSchema,
	},
	[ClientMessage.ConsumeEnergyOrb]: {
		payload: ItemIdSchema,
	},
	[ClientMessage.ConsumeScroll]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.ConsumeTab]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.ConsumeLamp]: {
		payload: ItemIdSchema,
	},
	[ClientMessage.ConsumeObjectItem]: {
		payload: ItemIdSchema,
	},
	[ClientMessage.ConsumeStressItem]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.EquipItem]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.UnequipItem]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.DropItem]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.WipePoisonFromItem]: {
		payload: ItemIdSchema,
	},
	[ClientMessage.EasterEggSearch]: {
		payload: z$6.object({
			egg: z$6.any(),
			eggPos: PositionSchema,
			eggComp: z$6.string(),
		}),
	},
	[ClientMessage.ExchangeItemsToStronghold]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			strongholdName: z$6.nativeEnum(StrongholdName),
			quantity: z$6.number().min(1).optional(),
		}),
	},
	[ClientMessage.ExchangeItemsFromStrongholdChest]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			quantity: z$6.number().min(1).optional(),
		}),
	},
	[ClientMessage.DepositToBank]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			quantity: z$6.number().min(1),
		}),
		throttle: 0,
	},
	[ClientMessage.DepositToWagon]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			quantity: z$6.number().min(1),
			wagonId: z$6.string(),
		}),
		throttle: 0,
	},
	[ClientMessage.DepositToCannon]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			quantity: z$6.number().min(1),
			cannonId: z$6.string().uuid(),
		}),
	},
	[ClientMessage.DepositToStrongholdChest]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			quantity: z$6.number().min(1),
			chestId: z$6.string(),
		}),
	},
	[ClientMessage.DepositToGuildChest]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			quantity: z$6.number().min(1),
			location: GuildContainerLocationSchema,
		}),
	},
	[ClientMessage.WithdrawItemFromBank]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			quantity: z$6.number().min(1),
		}),
		throttle: 0,
	},
	[ClientMessage.WithdrawItemFromWagon]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			itemType: ItemTypeSchema,
			quantity: z$6.number().min(1),
			wagonId: z$6.string(),
		}),
	},
	[ClientMessage.WithdrawItemFromCannon]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			itemType: ItemTypeSchema,
			quantity: z$6.number().min(1),
			cannonId: z$6.string().uuid(),
		}),
	},
	[ClientMessage.WithdrawFromStrongholdChest]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			itemType: ItemTypeSchema,
			quantity: z$6.number().min(1),
			chestId: z$6.string(),
		}),
	},
	[ClientMessage.WithdrawFromGuildChest]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			quantity: z$6.number().min(1),
			location: GuildContainerLocationSchema,
		}),
	},
	[ClientMessage.WithdrawFromLootBag]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			quantity: z$6.number().min(1),
			objectId: z$6.string(),
		}),
	},
	[ClientMessage.FenceAllItemsFromLootBag]: {
		payload: z$6.object({
			lootBagId: z$6.string(),
		}),
	},
	[ClientMessage.SendPrivateMessage]: {
		payload: z$6.object({
			recipientWalletAddress: WalletAddressSchema,
			message: ChatMessageSchema,
		}),
	},
	[ClientMessage.CraftingAction]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: z$6.number().min(1),
			strongholdName: z$6.nativeEnum(StrongholdName),
			focusModeEnabled: z$6.boolean(),
		}),
	},
	[ClientMessage.EngineeringAction]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: z$6.number().min(1),
			strongholdName: z$6.nativeEnum(StrongholdName),
			focusModeEnabled: z$6.boolean(),
		}),
	},
	[ClientMessage.AlchemyAction]: {
		payload: z$6.object({
			potionType: PotionSchema,
			amount: z$6.number().min(1),
			focusModeEnabled: z$6.boolean(),
		}),
	},
	[ClientMessage.Chat]: {
		payload: ChatMessageSchema,
	},
	[ClientMessage.ForgingAction]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: z$6.number().min(1),
			strongholdName: z$6.nativeEnum(StrongholdName),
			anvilPosition: PositionSchema.optional(),
			focusModeEnabled: z$6.boolean(),
		}),
	},
	[ClientMessage.SmeltingAction]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: z$6.number().min(1),
			strongholdName: z$6.nativeEnum(StrongholdName),
			anvilPosition: PositionSchema.optional(),
			focusModeEnabled: z$6.boolean(),
		}),
	},
	[ClientMessage.RepairingAction]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			strongholdName: z$6.nativeEnum(StrongholdName),
			anvilPosition: PositionSchema.optional(),
		}),
	},
	[ClientMessage.PoisonCraftingAction]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: z$6.number().min(1),
			strongholdName: z$6.nativeEnum(StrongholdName),
			focusModeEnabled: z$6.boolean(),
		}),
	},
	[ClientMessage.ScrappingAction]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
		}),
	},
	[ClientMessage.ThroneLeave]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.OrbClick]: {
		payload: z$6.object({
			orbName: z$6.nativeEnum(OrbName),
		}),
	},
	[ClientMessage.InteractNpc]: {
		payload: z$6.object({
			npcId: z$6.string(),
			action: z$6.nativeEnum(ActionName),
		}),
	},
	[ClientMessage.LockGate]: {
		payload: z$6.object({
			objectId: z$6.string(),
		}),
	},
	[ClientMessage.UnlockGate]: {
		payload: z$6.object({
			objectId: z$6.string(),
		}),
	},
	[ClientMessage.RepairGate]: {
		payload: z$6.object({
			objectId: z$6.string(),
		}),
	},
	[ClientMessage.UpgradeGate]: {
		payload: z$6.object({
			objectId: z$6.string(),
		}),
	},
	[ClientMessage.ExamineNpc]: {
		payload: z$6.string(),
	},
	[ClientMessage.PickpocketAttempt]: {
		payload: z$6.object({
			victimId: WalletAddressSchema,
		}),
	},
	[ClientMessage.ReportPickpocket]: {
		payload: z$6.object({
			thiefId: WalletAddressSchema,
			victimId: WalletAddressSchema,
		}),
	},
	[ClientMessage.PayPenalty]: {
		payload: z$6.object({
			thiefId: WalletAddressSchema,
			victimId: WalletAddressSchema,
		}),
	},
	[ClientMessage.ConsoleCommand]: {
		payload: z$6.string(),
	},
	[ClientMessage.Heartbeat]: {
		payload: z$6.object({
			focus: z$6.boolean(),
		}),
	},
	[ClientMessage.LeaveWagon]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.RideWagon]: {
		payload: z$6.object({
			wagonId: z$6.string(),
		}),
	},
	[ClientMessage.DriveWagon]: {
		payload: z$6.object({
			wagonId: z$6.string(),
		}),
	},
	[ClientMessage.RepairWagon]: {
		payload: z$6.object({
			wagonId: z$6.string(),
		}),
	},
	[ClientMessage.OpenWagonStorage]: {
		payload: z$6.object({
			wagonId: z$6.string(),
		}),
	},
	[ClientMessage.OpenCannonStorage]: {
		payload: z$6.object({
			cannonId: z$6.string().uuid(),
		}),
	},
	[ClientMessage.ConsumeMeal]: {
		payload: ItemIdSchema,
		throttle: 0,
	},
	[ClientMessage.WithdrawItemFromCollectionBox]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			itemType: ItemTypeSchema,
			quantity: z$6.number().min(1),
		}),
	},
	[ClientMessage.WithdrawAllItemsFromCollectionBox]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.InterfaceInteraction]: {
		payload: InterfaceInteractionSchema,
		throttle: 0,
	},
	[ClientMessage.DuelRequest]: {
		payload: WalletAddressSchema,
	},
	[ClientMessage.DuelRequestDecline]: {
		payload: z$6.object({
			interactionId: z$6.string(),
		}),
	},
	[ClientMessage.DuelRequestAccept]: {
		payload: z$6.object({
			interactionId: z$6.string(),
			targetPlayerId: WalletAddressSchema,
		}),
	},
	[ClientMessage.DuelRequestTypeUpdate]: {
		payload: z$6.object({
			targetPlayerId: WalletAddressSchema,
			duelType: z$6.nativeEnum(DuelType),
			interactionId: z$6.string(),
		}),
	},
	[ClientMessage.StanceSwitch]: {
		payload: z$6.nativeEnum(DuelCombatStance),
		throttle: 0,
	},
	[ClientMessage.FunnyWeaponWhack]: {
		payload: z$6.object({
			weapon: FunnyWeaponSchema,
			targetWalletAddress: WalletAddressSchema,
		}),
	},
	[ClientMessage.SetPFP]: {
		payload: z$6.object({
			pfp: z$6.string(),
		}),
	},
	[ClientMessage.SetChain]: {
		payload: z$6.object({
			id: z$6.string(),
		}),
	},
	[ClientMessage.UnsetPFP]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.SendDuelChatMessage]: {
		payload: z$6.object({
			walletAddress: WalletAddressSchema,
			displayName: z$6.string(),
			message: ChatMessageSchema,
			interactionId: z$6.string(),
		}),
	},
	[ClientMessage.ConsumeCracker]: {
		payload: ItemIdSchema,
	},
	[ClientMessage.ClaimCrackerTeam]: {
		payload: ChristmasItemsSchema,
	},
	[ClientMessage.OpenChristmasRewardModal]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.OpenEssenceRewardModal]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.InteractCoinPile]: {
		payload: z$6.object({
			id: z$6.string(),
			coins: z$6.number(),
		}),
	},
	[ClientMessage.GatherCarcass]: {
		payload: z$6.object({
			refId: z$6.string(),
		}),
	},
	[ClientMessage.TradeRequest]: {
		payload: z$6.object({
			counterPartyId: WalletAddressSchema,
		}),
	},
	[ClientMessage.TradeRequestResponse]: {
		payload: z$6.object({
			interactionId: z$6.string(),
			response: z$6.enum(["accept", "decline"]),
		}),
	},
	[ClientMessage.CookingAction]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			strongholdName: z$6.nativeEnum(StrongholdName),
			amount: z$6.number().min(1),
			focusModeEnabled: z$6.boolean(),
		}),
	},
	[ClientMessage.DisplaySpectatorBettingModal]: {
		payload: z$6.object({
			interactionId: z$6.string(),
		}),
	},
	[ClientMessage.ToggleRunning]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.ConfirmationModalResponse]: {
		payload: z$6.object({
			subject: z$6.string(),
			response: z$6.boolean(),
		}),
	},
	[ClientMessage.DestroyOwnBarricade]: {
		payload: z$6.object({
			barricadeId: z$6.string(),
		}),
	},
	[ClientMessage.LightBarricadeOnFire]: {
		payload: z$6.object({
			barricadeId: z$6.string(),
		}),
	},
	[ClientMessage.DestroyTeleportPortal]: {
		payload: z$6.object({
			portalId: z$6.string(),
		}),
	},
	[ClientMessage.SendDialogueResponse]: {
		payload: z$6.object({
			requestedNextLineId: z$6.string().nullable(),
			requestedNextLineActionIndex: z$6.number().optional(),
		}),
	},
	[ClientMessage.RequestCloseInterface]: {
		payload: InterfaceTypeSchema,
	},
	[ClientMessage.RequestCloseAllInterfaces]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.OpenMailboxScreen]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.OpenOnchainTradeHistory]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.OpenSplitSlider]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
		}),
	},
	[ClientMessage.StackItems]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.ShoutMessage]: {
		payload: z$6.object({
			message: z$6.string(),
		}),
	},
	[ClientMessage.DestroyTraps]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.DestroyBarricades]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.GateRepairInteraction]: {
		payload: z$6.object({
			gateId: z$6.string(),
		}),
	},
	[ClientMessage.GateUpgradeInteraction]: {
		payload: z$6.object({
			gateId: z$6.string(),
		}),
	},
	[ClientMessage.UpkeepStronghold]: {
		payload: z$6.object({
			planningTableId: z$6.string(),
		}),
	},
	[ClientMessage.PrintStrongholdKey]: {
		payload: z$6.object({
			planningTableId: z$6.string(),
		}),
	},
	[ClientMessage.CreateWagon]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.GatePassOverride]: {
		payload: z$6.object({
			gateId: z$6.string(),
		}),
	},
	[ClientMessage.ShowSticker]: {
		payload: z$6.string(),
	},
	[ClientMessage.OpenExcaliburWinnings]: {
		payload: z$6.undefined(),
	},
	[ClientMessage.WarpTeleport]: {
		payload: z$6.object({
			position: PositionSchema,
		}),
	},
	[ClientMessage.ConsumeFocusBoost]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
		}),
	},
	[ClientMessage.DestroyOwnCannon]: {
		payload: z$6.object({
			cannonId: z$6.string().uuid(),
		}),
	},
	[ClientMessage.ClaimWorkerGeneratedItems]: {
		payload: z$6.object({
			workerId: z$6.number(),
			workerType: z$6.enum(WorkerItemGenerations),
			amount: z$6.number().min(1),
		}),
	},
	[ClientMessage.BuyFromSlayerShop]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: z$6.number().min(1),
		}),
	},
	[ClientMessage.BuyFromSkillingShop]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: z$6.number().min(1),
		}),
	},
	[ClientMessage.TutorialIslandWalkToEntity]: {
		payload: z$6.nativeEnum(TutorialIslandTaskId),
	},
	[ClientMessage.ConsumeInsightTomes]: {
		payload: z$6.object({
			type: z$6.nativeEnum(CombatType),
			amount: z$6.number().min(1),
		}),
	},
	[ClientMessage.TargetedSpell]: {
		payload: z$6.object({
			spell: z$6.nativeEnum(SpellId),
			targetId: z$6.string(),
			target: z$6.nativeEnum(SpellTarget),
		}),
		throttle: 0,
	},
	[ClientMessage.InterruptMovement]: {
		payload: z$6.undefined(),
		throttle: 0,
	},
	[ClientMessage.AutoPickup]: {
		payload: z$6.object({
			groundItemObjectId: z$6.string(),
		}),
	},
	[ClientMessage.FalconItemSnatch]: {
		payload: z$6.object({
			groundItemObjectId: z$6.string(),
		}),
		throttle: 0,
	},
	[ClientMessage.CastTeleblock]: {
		payload: z$6.object({
			targetId: WalletAddressSchema,
			scrollItemId: ItemIdSchema,
		}),
		throttle: 0,
	},
	[ClientMessage.DepositAllToBank]: {
		payload: z$6.undefined(),
		throttle: 1e3,
	},
	[ClientMessage.RequestModal]: {
		payload: z$6.nativeEnum(ModalTypes),
		throttle: 1e3,
	},
	[ClientMessage.SelectPet]: {
		payload: z$6.object({
			companion: CompanionSchema,
		}),
		throttle: 1e3,
	},
	[ClientMessage.DismissPet]: {
		payload: z$6.undefined(),
		throttle: 1e3,
	},
	[ClientMessage.PetFlourish]: {
		payload: z$6.object({
			ownerId: WalletAddressSchema,
		}),
		throttle: 1e3,
	},
	[ClientMessage.FalconGoingTowardsItem]: {
		payload: z$6.object({
			ownerId: WalletAddressSchema,
			itemId: ItemIdSchema,
		}),
		throttle: 400,
	},
	[ClientMessage.FalconSicOn]: {
		payload: z$6.object({
			ownerId: WalletAddressSchema,
			targetId: WalletAddressSchema,
		}),
		throttle: 1e3,
	},
	[ClientMessage.ChangeGuildStorage]: {
		payload: z$6.object({
			location: GuildContainerLocationSchema,
		}),
		throttle: 1e3,
	},
	[ClientMessage.RewardDispenserCashOut]: {
		payload: z$6.object({
			objectId: z$6.string(),
		}),
		throttle: 1e3,
	},
	[ClientMessage.SendUnlockedPerks]: {
		payload: z$6.array(
			z$6
				.nativeEnum(ActiveCompanionPerk)
				.or(z$6.nativeEnum(PassiveCompanionPerk)),
		),
	},
	[ClientMessage.OpenSkillGuide]: {
		payload: z$6.object({
			selectedSkill: z$6.nativeEnum(SkillType$1),
		}),
		throttle: 1e3,
	},
	[ClientMessage.OpenMasteriesModal]: {
		payload: z$6.object({}),
		throttle: 1e3,
	},
} as const;

export const ClientRequestSettings = {
	[ClientRequest.MakePlanks]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.CreateTradeOrder]: {
		payload: z$6.object({
			type: z$6.nativeEnum(OrderType),
			itemTypeToBuy: ItemTypeSchema.optional(),
			itemIdToSell: ItemIdSchema.optional(),
			quantity: IntegerSchema.min(1),
			initial_quantity: IntegerSchema.min(1),
			price: IntegerSchema.min(1),
			slot: IntegerSchema.min(0).max(5),
		}),
	},
	[ClientRequest.DeleteTradeOrder]: {
		payload: z$6.string(),
	},
	[ClientRequest.ChangeItemProtection]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			protect: z$6.boolean(),
		}),
	},
	[ClientRequest.GetShopData]: {
		payload: z$6.object({
			shop: z$6.nativeEnum(Shop),
		}),
	},
	[ClientRequest.BuyFromShop]: {
		payload: z$6.object({
			shop: z$6.nativeEnum(Shop),
			itemType: ItemTypeSchema,
			amount: IntegerSchema.min(1),
		}),
	},
	[ClientRequest.BuyFromGeneralStore]: {
		payload: z$6.object({
			itemType: ItemTypeSchema,
			amount: IntegerSchema.min(1),
		}),
	},
	[ClientRequest.SellToGeneralStore]: {
		payload: z$6.object({
			itemId: ItemIdSchema,
			itemType: ItemTypeSchema,
			amount: IntegerSchema.min(1),
		}),
	},
	[ClientRequest.ClaimReward]: {
		payload: z$6.object({
			type: z$6.nativeEnum(PlayerRewardType),
			ref: z$6.string().optional(),
		}),
	},
	[ClientRequest.OpenStarterChest]: {
		payload: z$6.object({
			chestId: z$6.string(),
		}),
	},
	[ClientRequest.OpenChest]: {
		payload: z$6.object({
			chestId: z$6.string(),
		}),
	},
	[ClientRequest.InterfaceInteraction]: {
		payload: InterfaceInteractionSchema,
		throttle: 0,
	},
	[ClientRequest.ClaimGameItemWinnings]: {
		payload: z$6.object({
			duelId: z$6.string(),
		}),
	},
	[ClientRequest.WithdrawGameItemWinnings]: {
		payload: z$6.object({
			duelId: z$6.string(),
		}),
	},
	[ClientRequest.ClaimCryptoWinnings]: {
		payload: z$6.object({
			duelId: z$6.string(),
		}),
	},
	[ClientRequest.WithdrawCryptoStakes]: {
		payload: z$6.object({
			duelId: z$6.string(),
		}),
	},
	[ClientRequest.GetOnchainTradeSignature]: {
		payload: z$6.object({
			onchainTradeId: z$6.number(),
			chainId: z$6.number(),
			playerAddress: z$6.string(),
		}),
	},
	[ClientRequest.WithdrawOnchainTradeGameItem]: {
		payload: z$6.object({
			onchainTradeId: z$6.number(),
			playerAddress: z$6.string(),
		}),
	},
	[ClientRequest.SettleOnchainTradeGameItem]: {
		payload: z$6.object({
			onchainTradeId: z$6.number(),
			playerAddress: z$6.string(),
		}),
	},
	[ClientRequest.AddFriend]: {
		payload: z$6.object({
			nameOrWalletAddress: z$6.string(),
		}),
	},
	[ClientRequest.RemoveFriend]: {
		payload: z$6.object({
			nameOrWalletAddress: z$6.string(),
		}),
	},
	[ClientRequest.ClaimSpecialRewards]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.CheckSpecialRewards]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.GetEthPrice]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.GetRonPrice]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.CreateParty]: {
		payload: z$6.string(),
	},
	[ClientRequest.JoinParty]: {
		payload: z$6.string(),
	},
	[ClientRequest.LeaveParty]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.KickPartyMember]: {
		payload: z$6.object({
			partyId: z$6.string(),
			memberId: WalletAddressSchema,
		}),
	},
	[ClientRequest.InviteToParty]: {
		payload: WalletAddressSchema,
	},
	[ClientRequest.InviteToPartyDecline]: {
		payload: z$6.object({
			partyId: z$6.string(),
			playerId: WalletAddressSchema,
		}),
	},
	[ClientRequest.CashoutRoyalTreasuryItems]: {
		payload: z$6.object({
			chainId: z$6.number(),
		}),
	},
	[ClientRequest.PingPong]: {
		payload: PingSchema,
	},
	[ClientRequest.LoginRequestPackets]: {
		payload: z$6.nativeEnum(LoginStage),
		throttle: 1,
	},
	[ClientRequest.CreateGuild]: {
		payload: z$6.string(),
	},
	[ClientRequest.LeaveGuild]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.KickGuildMember]: {
		payload: WalletAddressSchema,
	},
	[ClientRequest.InviteToGuild]: {
		payload: z$6.object({
			playerId: WalletAddressSchema,
			feePercentage: IntegerSchema,
		}),
	},
	[ClientRequest.GetGuildInvites]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.RespondGuildInvite]: {
		payload: z$6.object({
			inviteId: z$6.string(),
			accept: z$6.boolean(),
		}),
	},
	[ClientRequest.AddGuildMemberRole]: {
		payload: z$6.object({
			memberId: WalletAddressSchema,
			role: z$6.nativeEnum(GuildRole),
		}),
	},
	[ClientRequest.RemoveGuildMemberRole]: {
		payload: z$6.object({
			memberId: WalletAddressSchema,
			role: z$6.nativeEnum(GuildRole),
		}),
	},
	[ClientRequest.GetFounderFalcon]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.RetryRoyalTreasuryCashout]: {
		payload: z$6.object({
			cashInId: z$6.number(),
		}),
	},
	[ClientRequest.SacrificeEnergyOrbs]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.GetCharterUsage]: {
		payload: z$6.undefined(),
	},
	[ClientRequest.DepositGuildCharters]: {
		payload: z$6.object({
			amount: IntegerSchema.min(1),
		}),
	},
} as const;

export const ClientRequestSettingsWithMetadata = Object.fromEntries(
	Object.entries(ClientRequestSettings).map(([key, setting]) => [
		key,
		{
			...setting,
			payload: z$6.object({
				reqId: z$6.string().uuid(),
				payload: setting.payload,
			}),
		},
	]),
) as {
	[K in keyof typeof ClientRequestSettings]: {
		payload: z$6.ZodObject<{
			reqId: z$6.ZodString;
			payload: (typeof ClientRequestSettings)[K]["payload"];
		}>;
	};
};
