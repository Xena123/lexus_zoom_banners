var ctaExit;
var centreName;

if (!Enabler.isInitialized()) {
  Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
} else {
  enablerInitialized();
}

function enablerInitialized() {
  document.getElementById('overlay').addEventListener('click', bgExitHandler, false);
  if (!Enabler.isPageLoaded()) {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, init);
  } else {
    init();
  }
}

function init() {
  
    Enabler.setProfileId(10014885);
    var devDynamicContent = {};

    devDynamicContent.Lexus_Business_WLT_Sheet1 = [{}];
    devDynamicContent.Lexus_Business_WLT_Sheet1[0]._id = 0;
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].ID = 1;
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].Reporting_Label = "BUSCT";
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].Lexus_Name = "Lexus Belfast";
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].Centre_Name = "Belfast";
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].CTA = {};
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].CTA.Url = "";
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].CTA_Win = {};
    devDynamicContent.Lexus_Business_WLT_Sheet1[0].CTA_Win.Url = "https://www.lexus.co.uk/centres/belfast/latest-offers/item?docid=1416286&utm_source=display&utm_medium=cpm&utm_campaign=ebaon";
    Enabler.setDevDynamicContent(devDynamicContent);

    ctaExit = dynamicContent.Lexus_Business_WLT_Sheet1[0].CTA.Url;

    centreName = dynamicContent.Lexus_Business_WLT_Sheet1[0].Centre_Name;
    lexusCentreName = dynamicContent.Lexus_Business_WLT_Sheet1[0].Lexus_Name;
    document.getElementById("dynamic-retailer-name").innerHTML = centreName;
    document.getElementById("dynamic-retailer-name--two").innerHTML = lexusCentreName;
    startAnimation();
}

var bgExitHandler = function(e) {
  e.preventDefault();
  Enabler.exitOverride('CTA', ctaExit);
  return false;
}