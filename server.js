
var express = require('express');//
// var bodyParser = require('body-parser');//
// var mongoose = require('mongoose');
// var mysql=require('mysql');
var app = express();

var config= require('./dbtest.js');

var egyptbrand =require('./model/egypt_billing_data');

var egyptbrandRoute=require('./routes/brand.js');

var egyptskuRoute=require('./routes/sku.js');

var egyptgetRoute=require('./routes/getall.js');

var egyptGrngetRoute=require('./routes/grnfetch.js');

var Indgrn= require('./model/Indgrn');
var IndRoute = require('./routes/IndRoute');

var DND= require('./model/DND');
var DndRoute= require('./routes/DndRoute');
var DND= require('./model/indiasalesreport');

var SFA= require('./model/SFA');
var sfaupload= require('./routes/sfaupload');


var Pur_return= require('./model/Pur_return');
var PurRoute= require('./routes/PurRoute');

var Sales_return= require('./model/Sales_return');
var SalesRoute= require('./routes/SalesRoute');


var Egygrn= require('./model/Egygrn');
var EgyRoute = require('./routes/EgyRoute');

var EgyDnd= require('./model/EgyDND');
var EgyDndRoute = require('./routes/EgyDndRoute');

var EgyPur_return= require('./model/EgyPur_return');
var EgyPurRoute= require('./routes/EgyPurRoute');

var EgySales_return= require('./model/EgySales_return');
var EgySalesRoute= require('./routes/EgySalesRoute');

var Indogrn= require('./model/Indogrn');
var IndoRoute = require('./routes/IndoRoute');

var IndoDND= require('./model/IndoDND');
var IndoDndRoute= require('./routes/IndoDndRoute');

var IndoPur_return= require('./model/IndoPur_return');
var IndoPurRoute= require('./routes/IndoPurRoute');

var IndoSales_return= require('./model/IndoSales_return');
var IndoSalesRoute= require('./routes/IndoSalesRoute');

var IndoSellout= require('./model/indonesia_invoice_data');
var IndoSelloutRoute= require('./routes/IndonesiaSellout');
var IndoDpmsRoute= require('./routes/Indonesiadpms');

var IndoSFA= require('./model/indonesia_sfa');
var IndoSFARoute= require('./routes/indonesiasfa');

var egyptSFA= require('./model/egypt_sfa_data');
var egyptSFARoute= require('./routes/egyptsfa');
var monthonmonth=require('./routes/monthonmonth')


var indiasfa= require('./model/indiasfa.js');
var fetchstoreplan= require('./routes/fetchstoreplan');
var fetchvisitstatus= require('./routes/fetchvisitstatus');


var Pakgrn= require('./model/Pakgrn');
var PakRoute = require('./routes/PakRoute');
var PakDND= require('./model/PakDND');
var PakDndRoute= require('./routes/PakDndRoute');
var PakPur_return= require('./model/PakPurchase_return');
var PakPurRoute= require('./routes/PakPurRoute');
var PakSales_return= require('./model/PakSales_return');
var PakSalesRoute= require('./routes/PakSalesRoute');
var pakProduct_master= require('./model/pak_productmaster');
var PakProductRoute= require('./routes/PakProductRoute');
var pakPromotion_master= require('./model/pak_promotionmaster');
var PakPromotionRoute= require('./routes/PakPromotionRoute');
var pakCustomer_master= require('./model/pak_customermaster');
var PakCustomerRoute= require('./routes/PakCustomerRoute');
var pak_sfa_master= require('./model/pak_sfa_master');
var PakSFARoute= require('./routes/PakSFARoute');
var pakInventory_master= require('./model/pak_inventorymaster');
var PakInventoryRoute= require('./routes/PakInventoryRoute');
var pakDSROutlet_master= require('./model/dsr_outlet');
var PakDSROutletRoute= require('./routes/PakDSROutletRoute');



var IndoYear=require('./model/indonesia_invoice_data');
var Indofetchyearlyselloutroute=require('./routes/indofetchyearlysellout.js');

var EgyptYear=require('./model/SellInSellOutDetails');
var fetchyearlyselloutroute=require('./routes/fetchyearsellout.js');
var fetchmonthlyselloutroute=require('./routes/fetchmonthsellout.js');
var fetchrequiredmonthlyselloutroute=require('./routes/fetchuptorequiredmonthsellout.js');

var fetchUniverse=require('./routes/universe.js');
var fetchCoverage=require('./routes/coverage.js');
var fetchPenetration=require('./routes/penetration.js');
var fetchThroughput=require('./routes/throughput.js');
var dsrtotalvolume=require('./routes/dsrtotalvolume');

var fetchUniverseQuarter=require('./routes/fetchuniversequarter.js');
var fetchPenetrationQuarter=require('./routes/fetchpenetrationquarter.js');
var fetchCoverageQuarter=require('./routes/fetchcoveragequarter.js');
var fetchThroughputQuarter=require('./routes/fetchthroughputquarter.js');
var fetchUniverseQuarter_indo=require('./routes/fetchuniversequarter_indo.js');
var fetchPenetrationQuarter_indo=require('./routes/fetchpenetrationquarter_indo.js');
var fetchCoverageQuarter_indo=require('./routes/fetchcoveragequarter_indo.js');

var fetchUniverseBIWS=require('./routes/universe_biws.js');
//var fetchCoverageBIWS=require('./routes/coverage_biws.js');
var fetchPenetrationBIWS=require('./routes/penetration_biws.js');
var fetchThroughputBIWS=require('./routes/throughput_biws.js');
var fetchCoverageBIWS=require('./routes/coverage_biws.js');

var fetchyearlyTrends=require('./routes/yearlytrends.js');
var fetchyearlyTrendsSellin=require('./routes/yearlytrendssellin.js');
var fetchyearonyearselloutvolume=require('./routes/fetchyearonyearselloutvolume.js');
var fetchdistributorrecord=require('./routes/fetchdistributorrecord.js')
var fetchdsrrecord=require('./routes/fetchdsrrecord.js')
var fetchskurecord=require('./routes/fetchskurecord.js')
var fetchproductfamilyrecord=require('./routes/fetchproductfamilydetails.js')
var fetchglobalchanneltype=require('./routes/fetchglobalchanneltype.js')
var fetchinventoryrecord=require('./routes/fetchinventoryrecord.js')
var fetchskunameinsellout=require('./routes/fetchskunameinsellout.js')
var fetchskunameinsellin=require('./routes/fetchskunameinsellin.js')

var fetchproductfamilysellinrecord=require('./routes/fetchproductfamilysellindetails.js')
var fetchsellinskurecord=require('./routes/fetchsellinskurecord.js')
var fetchsellindistributorrecord=require('./routes/fetchsellindistributorrecord.js')
var fetchyearonyearsellinvolume=require('./routes/fetchyearonyearsellinvolume.js');

var fetchtierwisemonthlysellout=require('./routes/fetchtierwisemonthlysellout.js');
var fetchtierwisemonthlysellin=require('./routes/fetchtierwisemonthlysellin.js');

var outletvalue=require('./routes/outletvalue.js')//SRS
var fetchstoreplan=require('./routes/fetchstoreplan.js');//SRS

var fetchdistinctcustomer=require('./routes/fetchdistinctcustomer.js')
var fetchdistinctcustomertiertype=require('./routes/fetchdistinctcustomertiertype.js')
var fetchdistinctoutlet=require('./routes/fetchdistinctoutlet.js')
var fetchweekwisesellinsellout=require('./routes/fetchweekwisesellinsellout.js')
var fetchcallcountbystatus=require('./routes/fetchcallcountbystatus.js')//planned call
var fetchcallcountvisittype=require('./routes/fetchcallcountbyvisittype.js')// total call
var fetchvisitstatecount=require('./routes/fetchvisitstatecount.js')
var fetchvisittype=require('./routes/fetchvisittype')

var effectivecalls=require('./routes/effectivecalls.js')
var effectivecallmonth=require('./routes/effectivecallsmonthwise.js')
var productfamilyinfo=require('./routes/productfamilyinfo.js')
var fetchbiwsinsellout=require('./routes/fetchbiwsinsellout.js')
var fetchpremiumbiwsinsellout=require('./routes/fetchpremiumbiwsinsellout.js')
var fetchpremiuminsellout=require('./routes/fetchpremiuminsellout.js')
var fetchpremiuminsellin=require('./routes/fetchpremiuminsellin.js')

var fetchyearwisebiwsinsellout=require('./routes/fetchyearwisebiwsinsellout.js')
var fetchyearwisepremiuminsellin=require('./routes/fetchyearwisepremiuminsellin.js')
var fetchyearwisepremiuminsellout=require('./routes/fetchyearwisepremiuminsellout.js')

var fetchweekwisesellinselloutpremiumdata=require('./routes/fetchweekwisepremiumdata.js')
var fetchweekwisesellinselloutbiwsdata=require('./routes/fetchweekwisebiwsdata.js')

var monthlysellin=require('./routes/monthlysellin.js')
var monthlysellinpremium=require('./routes/monthlysellinpremium.js')
var monthlydsrsellin=require('./routes/monthlydsrsellin.js')

var fetchdailydistributorsellout=require('./routes/fetchdailydistributorsellout.js')
var fetchdailydistributorselloutpremiumvalue=require('./routes/fetchdailydistributorselloutpremiumvalue.js')
var fetchdailydistributorselloutbiws=require('./routes/fetchdailydistributorselloutbiws.js')

var fetchdailydsrvolume=require('./routes/fetchdailydsrvolume.js')
var fetchdailydsrpremiumvolume=require('./routes/fetchdailydsrpremiumvolume.js')
var fetchdailydsrbiwsvolume=require('./routes/fetchdailydsrbiwsvolume.js')

var fetchdailyuniverse=require('./routes/fetchdailyuniverse.js')
var fetchdailycoverage=require('./routes/fetchdailycoverage.js')
var fetchdailypenetration=require('./routes/fetchdailypenetration.js')
var fetchdailythroughput=require('./routes/fetchdailythroughput.js')
var fetchdailyuniversebiws=require('./routes/fetchdailyuniversebiws.js')
var fetchdailycoveragebiws=require('./routes/fetchdailycoveragebiws.js')
var fetchdailypenetrationbiws=require('./routes/fetchdailypenetrationbiws.js')
var fetchdailythroughputbiws=require('./routes/fetchdailythroughputbiws.js')

var fetchdsrwisedailyuniverse=require('./routes/fetchdsrwisedailyuniverse.js')
var fetchdsrwisedailycoverage=require('./routes/fetchdsrwisedailycoverage.js')
var fetchdsrwisedailypenetration=require('./routes/fetchdsrwisedailypenetration.js')
var fetchdsrwisedailythroughput=require('./routes/fetchdsrwisedailythroughput.js')

var fetchdsrwisedailybiwsuniverse=require('./routes/fetchdsrwisedailybiwsuniverse.js')
var fetchdsrwisedailybiwscoverage=require('./routes/fetchdsrwisedailybiwscoverage.js')
var fetchdsrwisedailybiwspenetration=require('./routes/fetchdsrwisedailybiwspenetration.js')
var fetchdsrwisedailybiwsthroughput=require('./routes/fetchdsrwisedailybiwsthroughput.js')


var fetchmaxdate=require('./routes/fetchmaxdate')
var fetchdistributorrecordcount=require('./routes/fetchdistributorrecordcount.js')
var fetchdistributorsrecordcount=require('./routes/fetchdistributorsrecordcount.js')
var fetchweeklyinventory=require('./routes/fetchweeklyinventory')
var paktry=require('./routes/paktry.js');
var fetchpaksfa=require('./routes/fetchpaksfa.js')
var fetchpakdnd=require('./routes/fetchpakdnd.js')
var unique_billed_customer=require('./routes/unique_billed_customers.js');
var cptpremiumuniverse=require('./routes/cptpremiumuniverse.js');
var cptcoverage=require('./routes/cptcoverage.js');
var cptpenetration=require('./routes/cptpenetration.js');
var fetchpakinventory=require('./routes/fetchpakinventory.js')
var fetchpakcustomerinfo=require('./routes/pakcustomerinfo.js')

var dailygrnrecordcount=require('./routes/dailygrnrecordcount.js')
var dailydndrecordcount=require('./routes/dailydndrecordcount.js')
var dailysfarecordcount=require('./routes/dailysfarecordcount.js')
var visitcountmonthonmonth=require('./routes/visitcountmonthonmonth.js')
var dailypurchasereturn_recordcount=require('./routes/dailypurchasereturn_recordcount.js')
var dailysalesreturn_recordcount=require('./routes/dailysalesreturn_recordcount.js')
var fetchsfacount = require('./routes/fetchsfacount.js')
var fetchsfacountvalue=require('./routes/fetchsfacountvalue.js')
var distributorachievement=require('./routes/distributorachievement.js')
var distributorpremiumvolume=require('./routes/distributorpremiumvolume.js')
var monthlybilledcustomer=require('./routes/monthlybilledcustomer.js')
var fetchdata=require('./routes/fetchdata.js')
var fetchsfadata=require('./routes/fetchsfadata.js')
var cptnonpremiumsellout=require('./routes/cptnonpremiumsellout.js')
var cptpremiumsellout=require('./routes/cptpremiumsellout.js')
var dsrachievement=require('./routes/dsrachievement.js')
var dsrpremiumvolume=require('./routes/dsrpremiumvolume.js')
var dsrmonthlybilledcustomer=require('./routes/dsrmonthlybilledcustomer.js')
var newoutlet=require('./routes/newoutlet.js')
var fetchcalltype=require('./routes/fetchcalltype.js')
var fetchtop5nosalereason=require('./routes/fetchtop5nosalereason.js')
var fetchnosalereason=require('./routes/fetchnosalereason.js')
var transfersfa=require('./routes/transfersfa.js')
var transferbilldata=require('./routes/transferbilldata.js')
var fetchaveragetime=require('./routes/fetchaveragetime.js')
var fetchcustomer_visited=require('./routes/fetchcustomer_visited.js')
var fetchactivecustomers=require('./routes/fetchactivecustomers.js')
var fetchtotaluniverse=require('./routes/fetchtotaluniverse.js')
var dsreffectivecallsdaywise=require('./routes/dsreffectivecallsdaywise')

var fetchdsrwisevisittype=require('./routes/fetchdsrwisevisittype')
var fetchdsrwisecoverage=require('./routes/dsrcoveragequarter.js')
var calls=require('./routes/calls.js')
var effectivecalls_indo=require('./routes/effectivecalls_indo.js')
var fetchThroughputQuarter_indo=require('./routes/fetchthroughputquarter_indo.js')
var PORT = 8082;//

app.use(bodyParser.urlencoded({"limit":'50mb',"extended" : true})); //
app.use(bodyParser.json({limit:'50mb'}));//

mongoose.connect(config.DB,{ useNewUrlParser: true }).then(function() {
		console.log(config.DB)
        console.log('Database is connected successfully')
}, function(err) {
        console.log('Can not connect to the database' + err)
});
app.use('/fetchThroughputQuarter_indo',fetchThroughputQuarter_indo)
app.use('/effectivecalls_indo',effectivecalls_indo)
app.use('/calls',calls)
app.use('/fetchdsrwisecoverage',fetchdsrwisecoverage)
app.use('/fetchdsrwisevisittype',fetchdsrwisevisittype)
app.use('/dsreffectivecallsdaywise',dsreffectivecallsdaywise)
app.use('/fetchtotaluniverse',fetchtotaluniverse)
app.use('/fetchactivecustomers',fetchactivecustomers)
app.use('/cptnonpremiumsellout',cptnonpremiumsellout)
app.use('/cptpremiumsellout',cptpremiumsellout)
app.use('/fetchcustomer_visited',fetchcustomer_visited)
app.use('/fetchaveragetime',fetchaveragetime)
app.use('/transferbilldata',transferbilldata)
app.use('/transfersfa',transfersfa)

app.use('/fetchnosalereason',fetchnosalereason)

app.use('/fetchtop5nosalereason',fetchtop5nosalereason)
app.use('/calltype',fetchcalltype)
app.use('/newoutlet',newoutlet)
app.use('/fetchdata',fetchdata)
app.use('/fetchsfadata',fetchsfadata)
app.use('/dsrachievement',dsrachievement)
app.use('/dsrpremiumvolume',dsrpremiumvolume)
app.use('/distributorachievement',distributorachievement)
app.use('/distributorpremiumvolume',distributorpremiumvolume)
app.use('/monthlybilledcustomer',monthlybilledcustomer)
app.use('/dsrmonthlybilledcustomer',dsrmonthlybilledcustomer)
app.use('/fetchsfacountvalue',fetchsfacountvalue)
app.use('/fetchsfacount',fetchsfacount)
app.use('/dailysfarecordcount',dailysfarecordcount)
app.use('/dailygrnrecordcount',dailygrnrecordcount)
app.use('/dailydndrecordcount',dailydndrecordcount)
app.use('/cptpremiumuniverse',cptpremiumuniverse)
app.use('/cptcoverage',cptcoverage)
app.use('/cptpenetration',cptpenetration)
app.use('/fetchpakinventory',fetchpakinventory)
app.use('/fetchpakcustomerinfo',fetchpakcustomerinfo)
app.use('/monthonmonth',monthonmonth)
app.use('/visitcountmonthonmonth',visitcountmonthonmonth)
app.use('/dailypurchasereturn_recordcount',dailypurchasereturn_recordcount)
app.use('/dailysalesreturn_recordcount',dailysalesreturn_recordcount)


app.use('/unique_billed_customers',unique_billed_customer)
app.use('/dsrtotalvolume',dsrtotalvolume)
app.use('/paktry',paktry)
app.use('/fetchmaxdate',fetchmaxdate)
app.use('/fetchdistributorrecordcount',fetchdistributorrecordcount)
app.use('/fetchdistributorsrecordcount',fetchdistributorsrecordcount)
app.use('/fetchweeklyinventory',fetchweeklyinventory)
app.use('/fetchpaksfa',fetchpaksfa)
app.use('/fetchpakdnd',fetchpakdnd)

app.use('/fetchmonthlysellin',monthlysellin)
app.use('/fetchmonthlysellinpremium',monthlysellinpremium)
app.use('/fetchmonthlydsrselloutvalue',monthlydsrsellin)
app.use('/fetchdailydistributorsellout',fetchdailydistributorsellout)
app.use('/fetchdailydistributorselloutpremiumvalue',fetchdailydistributorselloutpremiumvalue)
app.use('/fetchdailydistributorselloutbiws',fetchdailydistributorselloutbiws)

app.use('/fetchdailyuniverse',fetchdailyuniverse)
app.use('/fetchdailycoverage',fetchdailycoverage)
app.use('/fetchdailypenetration',fetchdailypenetration)
app.use('/fetchdailythroughput',fetchdailythroughput)
app.use('/fetchdsrwisedailyuniverse',fetchdsrwisedailyuniverse)
app.use('/fetchdsrwisedailycoverage',fetchdsrwisedailycoverage)
app.use('/fetchdsrwisedailypenetration',fetchdsrwisedailypenetration)
app.use('/fetchdsrwisedailythroughput',fetchdsrwisedailythroughput)

app.use('/fetchdailyuniversebiws',fetchdailyuniversebiws)
app.use('/fetchdailycoveragebiws',fetchdailycoveragebiws)
app.use('/fetchdailypenetrationbiws',fetchdailypenetrationbiws)
app.use('/fetchdailythroughputbiws',fetchdailythroughputbiws)

app.use('/fetchdsrwisedailybiwsuniverse',fetchdsrwisedailybiwsuniverse)
app.use('/fetchdsrwisedailybiwscoverage',fetchdsrwisedailybiwscoverage)
app.use('/fetchdsrwisedailybiwspenetration',fetchdsrwisedailybiwspenetration)
app.use('/fetchdsrwisedailybiwsthroughput',fetchdsrwisedailybiwsthroughput)

app.use('/fetchdailydsrvolume',fetchdailydsrvolume)
app.use('/fetchdailydsrpremiumvolume',fetchdailydsrpremiumvolume)
app.use('/fetchdailydsrbiwsvolume',fetchdailydsrbiwsvolume)

app.use('/fetchvisittype',fetchvisittype)
app.use('/fetchbiwsinsellout',fetchbiwsinsellout)
app.use('/fetchpremiumbiwsinsellout',fetchpremiumbiwsinsellout)// Optional one
app.use('/fetchpremiuminsellout',fetchpremiuminsellout)
app.use('/fetchpremiuminsellin',fetchpremiuminsellin)
app.use('/fetchweekwisesellinselloutpremiumdata',fetchweekwisesellinselloutpremiumdata)
app.use('/fetchweekwisesellinselloutbiwsdata',fetchweekwisesellinselloutbiwsdata)

app.use('/fetchyearwisebiwsinsellout',fetchyearwisebiwsinsellout)
app.use('/fetchyearwisepremiuminsellin',fetchyearwisepremiuminsellin)
app.use('/fetchyearwisepremiuminsellout',fetchyearwisepremiuminsellout)

app.use('/indco',IndRoute);
app.use('/effectivecall',effectivecalls);
app.use('/effectivecallmonthwise',effectivecallmonth);
app.use('/fetchproductfamilyinfo',productfamilyinfo);
app.use('/fetchskunameinsellout',fetchskunameinsellout);
app.use('/fetchskunameinsellin',fetchskunameinsellin);


app.use('/indiagrn', IndRoute);
app.use('/indiadnd', DndRoute);
app.use('/india_pur_return',PurRoute);
app.use('/india_sales_return',SalesRoute);
app.use('/sfaupload', sfaupload);
app.use('/fetchdistinctcustomer',fetchdistinctcustomer)
app.use('/fetchdistinctcustomertiertype',fetchdistinctcustomertiertype)
app.use('/fetchdistinctoutlet',fetchdistinctoutlet)
app.use('/fetchweekwisesellinselloutdetails',fetchweekwisesellinsellout)
app.use('/fetchcallcountbystatus',fetchcallcountbystatus) // Visited count -> Planned Call
app.use('/fetchcallcountbyvisittype',fetchcallcountvisittype) // not visited /visited count -> total call
app.use('/fetchvisitstatecount',fetchvisitstatecount)  //visited count

app.use('./effectivecalls',effectivecalls)

app.use('/Indofetchyearlyselloutroute',Indofetchyearlyselloutroute)
app.use('/fetchYearlySellout',fetchyearlyselloutroute)
app.use('/fetchMonthlySellout',fetchmonthlyselloutroute)
app.use('/fetchRequiredMonthlySellout',fetchrequiredmonthlyselloutroute)
app.use('/fetchUniverse',fetchUniverse)
app.use('/fetchCoverage',fetchCoverage)
app.use('/fetchPenetration',fetchPenetration)
app.use('/fetchThroughput',fetchThroughput)
app.use('/fetchinventoryrecord',fetchinventoryrecord)


app.use('/fetchUniverseQuarter',fetchUniverseQuarter)
app.use('/fetchPenetrationQuarter',fetchPenetrationQuarter)
app.use('/fetchCoverageQuarter',fetchCoverageQuarter)
app.use('/fetchUniverseQuarter_indo',fetchUniverseQuarter_indo)
app.use('/fetchPenetrationQuarter_indo',fetchPenetrationQuarter_indo)
app.use('/fetchCoverageQuarter_indo',fetchCoverageQuarter_indo)
app.use('/fetchThroughputQuarter',fetchThroughputQuarter)

app.use('/fetchUniversebiws',fetchUniverseBIWS)
app.use('/fetchCoveragebiws',fetchCoverageBIWS)
app.use('/fetchPenetrationbiws',fetchPenetrationBIWS)
app.use('/fetchThroughputBIWS',fetchThroughputBIWS)
app.use('/fetchyearlyTrends',fetchyearlyTrends)
app.use('/fetchsellinyearlyTrends',fetchyearlyTrendsSellin)
app.use('/fetchyearonyearselloutvolume',fetchyearonyearselloutvolume)
app.use('/fetchdistributorrecord',fetchdistributorrecord)
app.use('/fetchdsrrecord',fetchdsrrecord)
app.use('/fetchskurecord',fetchskurecord)
app.use('/fetchproductfamilyrecord',fetchproductfamilyrecord)
app.use('/fetchglobalchanneltype',fetchglobalchanneltype)
app.use('/fetchtierwisemonthlysellout',fetchtierwisemonthlysellout)


app.use('/fetchsellinproductfamilyrecord',fetchproductfamilysellinrecord)
app.use('/fetchsellinskurecord',fetchsellinskurecord)
app.use('/fetchsellindistributorrecord',fetchsellindistributorrecord)
app.use('/fetchyearonyearsellinvolume',fetchyearonyearsellinvolume)
app.use('/fetchtierwisemonthlysellin',fetchtierwisemonthlysellin)


app.use('/egyptgrn', EgyRoute);
app.use('/egyptdnd', EgyDndRoute);
app.use('/egypt_pur_return',EgyPurRoute);
app.use('/egypt_sales_return',EgySalesRoute);
app.use('/dpmsCollectionFromMongo',egyptgetRoute);
app.use('/dpmsCollectionFromMongoSellIn',egyptGrngetRoute);
app.use('/egyptSFACollectionFromMongo',egyptSFARoute);
app.use('/indonesiagrn', IndoRoute);
app.use('/indonesiadnd', IndoDndRoute);
app.use('/indonesia_pur_return',IndoPurRoute);
app.use('/indonesia_sales_return',IndoSalesRoute);

app.use('/indonesiaSellout',IndoSelloutRoute);
app.use('/indonesiaDPMSCollectionFromMongo',IndoDpmsRoute);
app.use('/indonesiaSFACollectionFromMongo',IndoSFARoute);


app.use('/pakistangrn', PakRoute);
app.use('/pakistandnd', PakDndRoute);
app.use('/pakistan_pur_return',PakPurRoute);
app.use('/pakistan_sales_return',PakSalesRoute);
app.use('/pakistan_product',PakProductRoute);
app.use('/pakistan_promotion',PakPromotionRoute);
app.use('/pakistan_customer',PakCustomerRoute);
app.use('/pakistan_sfa',PakSFARoute);
app.use('/pakistan_inventory',PakInventoryRoute);
app.use('/pakistan_dsr_outlet_match',PakDSROutletRoute);

app.use('/getVolumebyBrand', egyptbrandRoute);
app.use('/getVolumebySKU', egyptskuRoute);


app.use('/fetchstoreplan', fetchstoreplan);
app.use('/fetchvisitstatus', fetchvisitstatus);
app.use('/dsrvolume',outletvalue);


app.get('/s/:id/:name', (req, res) => res.send(req.params))


var server = app.listen(PORT, function(){
    console.log('Node.js server is  running on PORT: ',PORT);
});

