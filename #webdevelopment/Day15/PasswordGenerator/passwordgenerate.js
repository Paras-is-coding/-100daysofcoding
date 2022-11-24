



let small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let capital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let special = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let funny = [
"password",
"ineedapassword",
"changeme",
"secret",
"iamforgetful",
"newpassword",
"IamACompleteIdiot",
"nothing",
"nothingagain",
"iforgot",
"whydoialwaysforget",
"qwerty",
"asdf",
"aslpls",
"user",
"YouWontGuessThisOne",
"PasswordShmashword",
"youmoron",
"doubleclick",
"iamnottellingyoumypw",
"masterpassword",
"yetanotherpassword",
"nomorepasswords",
"password123",
"myonlypassword",
"cantremember",
"dontaskdonttell",
"memorysucks",
"earlyalzheimers",
"passwordforoldpeople",
"SayHelloToMyLittleFriend",
"HastaLaVistaBaby",
"IllBeBack",
"ThereIsNoSpoon",
"FranklyMyDear",
"HappyBirthdayMrPresident",
"WellAlwaysHaveParis",
"GoAheadMakeMyDay",
"NotInKansasAnymore",
"TheForceIsStrongInThisOne",
"ElementaryMyDearWatson",
"MyPreciousssPasssword",
"HoustonWeHaveAProblem",
"LifeIsLikeABoxOfChocolates",
"YouCantHandleThePassword",
"NobodyPutsBabyInACorner",
"YouHadMeAtPassword",
"InternetTheFinalFrontier",
"PasswordKarmaChameleon",
"ChewieWereHome",
"ImNoMan",
"ThereCanOnlyBeOneImmortal",
"DontWorryBeHappy",
"ForTheHorde",
"IAmMrRobot",
"WinterIsComing",
"SpaceTrooper",
"BeamMeUpScotty",
"BigMacforevah",
"MacIsForWoosies",
"TheAxeEffect",
"Tastetherainbow",
"justdoit",
"HaveaBreakHaveaKitKat",
"NoMoreRockyRoads",
"Pepsinotcola",
"ImsuchaGAPgirl",
"CowabungaDude",
"DontGoogleThis",
"Ilovepopsicles",
"MacLippies",
"HakunaMatata",
"MotherOfDragons",
"TheOneAndOnlyKhaleesi",
"AryaStarkWasHere",
"FedoraTheExplorer",
"XeroxThis",
"NotOnMySwatch",
"KentuckyFriedChicks",
"WorksLikeAPandoraCharm",
"JustNukeIt",
"NokiaConnectingPeople",
"AMacADayKeepsNoobsAway",
"MyPapaWasARollingStone",
"AreMilkaCowsReallyPurple",
"FizzieFizzleSticks",
"Bond007",
"GuinessTheRealTasteiofIreland",
"Corvette1313",
"ChicagoBullsFan",
"AlwaysAmericanApparel",
"Playboy",
"FerrariGolfer",
"Oreocookies",
"YabadabadooYahoo",
"OldMacDonaldHadaBurger",
"LOGGRedneck",
"FasterThanFedEx",
"TrailerParkIBMEngineer",
"SellMySoulonEbay",
"Amazonsonline",
"LikeAVirginiaSlim",
"WorldWildlifeFun",
"Shellpitstop",
"NoMoreBucksforStarbucks",
"Disneymonster",
"JingleTacoBells",
"RollsAnotherRoyce",
"FidelCastroCigars",
"EssieFingerTips",
"dragonballZ",
"giants",
"Marlboro",
"Yamaha",
"harleydavidson",
"jaguar",
"armaniman",
"magnum",
"broncos",
"Nascar",
"thunderbird",
"doubletwix",
"mustang",
"diablo777",
"devilwearsprada",
"barnesandnoble",
"SmellsLikeNirvana",
"KurtCobainWasHere",
"Listentothesoundofsilence",
"simonandgarfield",
"DJphantomoftheopera",
"gregorianchants ",
"Beatles",
"IAintNoHollabackGirl",
"PrinceofAllPurpleRains",
"StairwaytoHeaven",
"SummertimeHapiness",
"NothingElseMatters",
"WeretheLordsoftheBoards",
"BluejeanbabyLALady",
"DieAntwoortPassword",
"HelterSkelter66",
"IbelieveIcanfly",
"BornInTheUSofA",
"TheGreenGreenGrassofHomepage",
"CameinlikeaWr3kkB4ll",
"GiveANametoAlltheAnimals",
"LeonardodiCohen",
"HitMeBaby1MoreTime",
"HotelCaliforniaDreaming",
"CottonEyeJoe",
"Celticsounds",
"HappyNation",
"LaVieEnRose",
"WakeMeUpSeptemberEnds",
"Firestartah",
"YYYDelilah",
"BillieJeanNotMyGirl",
"RockULikeaHurricane",
"GalileoGalileo",
"PutYourLightsOn",
"BrimfulOfAsha45",
"StillGotTheBlues",
"StraightOuttaCompton",
"Walktheline",
"theramones",
"IWishIwasaPunkRocker",
"Another1BitestheDust",
"EveryBreathYouTake",
"lacrimosa",
"requiem",
"HelloMyNameIsDoctorGreenthumb",
"IfIWasARichGirlNanana",
"WhotheFisAlice",
"ThieveryCorp",
"BrickIntheWall",
"RollOverBethoven",
"princes",
"GenesisPhil",
"Ke$$a",
"ImagineAllThePeople",
"WaterlooSunset",
"ISaidMaybe",
"hallelujah",
"GoodBeachVibrations",
"FamilyAffair",
"SultansOfSwing",
"RiverDeepMountainHigh",
"MarvinGayeFan",
"ShouldIStayOrShouldIGo",
"RealSlimShadyPlsStandUp",
"BehindBlueEyes",
"MyBabyWorksfrom9to5",
"CloseMyEyesandCountto10",
"thNervousBreakdown",
"WaystoLeaveYourLover",
"SummerOf69",
"ICantGetNoSatisfaction",
"SmoothCriminal",
"LikeTheDesertsMissTheRain",
"TooSexyForMyCat",
"Route66",
"DancingQueen",
"SomebodyIUsedToKnow",
"NewKidInTown",
"Lambada",
"CloudNo9",
"BecauseYourGorgeous",
"IGotThePower",
"MilByciclesInBeijing",
"ImBlueDaBaDee",
"TeenageDirtBagBaby",
"Anaconda",
"OpaGangnamStyle",
"FightForUrRightToParty",
"HighwayToHell",
"HadTheTimeOfMyLife",
"CaroEmerald"]




class Password{
    static generateStrongPassword(){
        let password = '';
        password = password + special[Math.floor(Math.random()*special.length)]
        while(password.length <= 9){
            password = password + small[Math.floor(Math.random()*small.length)]
            password = password + capital[Math.floor(Math.random()*capital.length)]
            password = password + numbers[Math.floor(Math.random()*numbers.length)]
        }
        password = password + special[Math.floor(Math.random()*special.length)]
        return password;
    }
    static generateWeakPassword(){
        let password = '';
        for(let i=1; i<5; i++){
            password = password + small[Math.floor(Math.random()*small.length)]
        }
        for(let j=0;j<3;j++){
            password = password + numbers[Math.floor(Math.random()*numbers.length)]

        }
        return password;

    }
    static generateFunnyPassword(){
        return funny[Math.floor(Math.random()*funny.length)];
    }
    static generateSuperStrongPassword(){
        let password = '';
        while(password.length <= 12){
            password = password + special[Math.floor(Math.random()*special.length)]
            password = password + small[Math.floor(Math.random()*small.length)]
            password = password + capital[Math.floor(Math.random()*capital.length)]
            password = password + numbers[Math.floor(Math.random()*numbers.length)]
            password = password + special[Math.floor(Math.random()*special.length)]

        }
        return password;
    }
}


//dom access
let generate = document.getElementById("generate")
let strong = document.getElementById("strong")
let weak = document.getElementById("weak")
let funny_ = document.getElementById("funny")
let sstrong = document.getElementById("sstrong")

generate.addEventListener("click",()=>{
    let typebox = document.getElementById("type")
    if(typebox.style.display === "none"){
        typebox.style.display = "flex";
        typebox.style.flexDirection = "column";
    }
    else{
        typebox.style.display = "none";
    }
})


function displayPassword(psw){
    let showpassword = document.getElementById("showpassword")
    showpassword.innerHTML = psw;
}
strong.addEventListener("click",()=>{
    displayPassword(Password.generateStrongPassword());
})
weak.addEventListener("click",()=>{
    displayPassword(Password.generateWeakPassword());
})
funny_.addEventListener("click",()=>{
    displayPassword(Password.generateFunnyPassword());
})
sstrong.addEventListener("click",()=>{
    displayPassword(Password.generateSuperStrongPassword());

})






