Search.setIndex({docnames:["CONTRIBUTING","api/catalog","api/http_util","api/index","api/metadata","api/ncss","api/ncssdataset","api/radarserver","api/simplewebservice","citing","developerguide","examples/Basic_Usage","examples/Radar_Server_Level_3","examples/index","examples/ncss/NCSS_Cartopy_Example","examples/ncss/NCSS_Example","examples/ncss/NCSS_Timeseries_Examples","examples/upperair/Wyoming_Request","index","installguide"],envversion:53,filenames:["CONTRIBUTING.md","api/catalog.rst","api/http_util.rst","api/index.rst","api/metadata.rst","api/ncss.rst","api/ncssdataset.rst","api/radarserver.rst","api/simplewebservice.rst","citing.rst","developerguide.rst","examples/Basic_Usage.rst","examples/Radar_Server_Level_3.rst","examples/index.rst","examples/ncss/NCSS_Cartopy_Example.rst","examples/ncss/NCSS_Example.rst","examples/ncss/NCSS_Timeseries_Examples.rst","examples/upperair/Wyoming_Request.rst","index.rst","installguide.rst"],objects:{"siphon.catalog":{CatalogRef:[1,1,1,""],CompoundService:[1,1,1,""],Dataset:[1,1,1,""],DatasetCollection:[1,1,1,""],IndexableMapping:[1,1,1,""],SimpleService:[1,1,1,""],TDSCatalog:[1,1,1,""],get_latest_access_url:[1,4,1,""]},"siphon.catalog.CatalogRef":{__init__:[1,2,1,""],follow:[1,2,1,""],href:[1,3,1,""],name:[1,3,1,""],title:[1,3,1,""]},"siphon.catalog.CompoundService":{__init__:[1,2,1,""],name:[1,3,1,""],service_type:[1,3,1,""],services:[1,3,1,""]},"siphon.catalog.Dataset":{__init__:[1,2,1,""],access_urls:[1,3,1,""],access_with_service:[1,2,1,""],add_access_element_info:[1,2,1,""],download:[1,2,1,""],make_access_urls:[1,2,1,""],name:[1,3,1,""],remote_access:[1,2,1,""],remote_open:[1,2,1,""],resolve_url:[1,2,1,""],subset:[1,2,1,""],url_path:[1,3,1,""]},"siphon.catalog.DatasetCollection":{filter_time_nearest:[1,2,1,""],filter_time_range:[1,2,1,""]},"siphon.catalog.SimpleService":{__init__:[1,2,1,""],access_urls:[1,3,1,""],is_resolver:[1,2,1,""],name:[1,3,1,""],service_type:[1,3,1,""]},"siphon.catalog.TDSCatalog":{__init__:[1,2,1,""],base_tds_url:[1,3,1,""],catalog_refs:[1,3,1,""],catalog_url:[1,3,1,""],datasets:[1,3,1,""],latest:[1,3,1,""],services:[1,3,1,""]},"siphon.http_util":{BadQueryError:[2,5,1,""],DataQuery:[2,1,1,""],HTTPEndPoint:[2,1,1,""],UTC:[2,1,1,""],create_http_session:[2,4,1,""],parse_iso_date:[2,4,1,""],urlopen:[2,4,1,""]},"siphon.http_util.DataQuery":{add_query_parameter:[2,2,1,""],all_times:[2,2,1,""],items:[2,2,1,""],lonlat_box:[2,2,1,""],lonlat_point:[2,2,1,""],time:[2,2,1,""],time_range:[2,2,1,""],variables:[2,2,1,""]},"siphon.http_util.HTTPEndPoint":{get:[2,2,1,""],get_path:[2,2,1,""],get_query:[2,2,1,""],query:[2,2,1,""],url_path:[2,2,1,""],validate_query:[2,2,1,""]},"siphon.http_util.UTC":{dst:[2,2,1,""],tzname:[2,2,1,""],utcoffset:[2,2,1,""]},"siphon.metadata":{TDSCatalogMetadata:[4,1,1,""]},"siphon.metadata.TDSCatalogMetadata":{__init__:[4,2,1,""],metadata:[4,3,1,""]},"siphon.ncss":{NCSS:[5,1,1,""],NCSSQuery:[5,1,1,""],ResponseRegistry:[5,1,1,""],combine_dicts:[5,4,1,""],combine_xml_points:[5,4,1,""],default_unit_handler:[5,4,1,""],deletetempfile:[5,4,1,""],parse_csv_dataset:[5,4,1,""],parse_csv_header:[5,4,1,""],parse_csv_response:[5,4,1,""],parse_xml:[5,4,1,""],parse_xml_dataset:[5,4,1,""],parse_xml_point:[5,4,1,""],read_netcdf:[5,4,1,""],squish:[5,4,1,""]},"siphon.ncss.NCSS":{__init__:[5,2,1,""],get:[5,2,1,""],get_data:[5,2,1,""],get_data_raw:[5,2,1,""],get_path:[5,2,1,""],get_query:[5,2,1,""],metadata:[5,3,1,""],query:[5,2,1,""],unit_handler:[5,3,1,""],url_path:[5,2,1,""],validate_query:[5,2,1,""],variables:[5,3,1,""]},"siphon.ncss.NCSSQuery":{__init__:[5,2,1,""],accept:[5,2,1,""],add_lonlat:[5,2,1,""],add_query_parameter:[5,2,1,""],all_times:[5,2,1,""],items:[5,2,1,""],lonlat_box:[5,2,1,""],lonlat_point:[5,2,1,""],projection_box:[5,2,1,""],strides:[5,2,1,""],time:[5,2,1,""],time_range:[5,2,1,""],variables:[5,2,1,""],vertical_level:[5,2,1,""]},"siphon.ncss.ResponseRegistry":{"default":[5,6,1,""],__init__:[5,2,1,""],register:[5,2,1,""]},"siphon.ncss_dataset":{NCSSDataset:[6,1,1,""]},"siphon.ncss_dataset.NCSSDataset":{__init__:[6,2,1,""],accept_list:[6,3,1,""],axes:[6,3,1,""],coordinate_transforms:[6,3,1,""],gridsets:[6,3,1,""],lat_lon_box:[6,3,1,""],time_span:[6,3,1,""],variables:[6,3,1,""]},"siphon.radarserver":{RadarQuery:[7,1,1,""],RadarServer:[7,1,1,""],Station:[7,1,1,""],get_radarserver_datasets:[7,4,1,""],parse_station_table:[7,4,1,""],parse_xml_station:[7,4,1,""]},"siphon.radarserver.RadarQuery":{__init__:[7,2,1,""],add_query_parameter:[7,2,1,""],all_times:[7,2,1,""],items:[7,2,1,""],lonlat_box:[7,2,1,""],lonlat_point:[7,2,1,""],stations:[7,2,1,""],time:[7,2,1,""],time_range:[7,2,1,""],variables:[7,2,1,""]},"siphon.radarserver.RadarServer":{__init__:[7,2,1,""],get:[7,2,1,""],get_catalog:[7,2,1,""],get_catalog_raw:[7,2,1,""],get_path:[7,2,1,""],get_query:[7,2,1,""],metadata:[7,3,1,""],query:[7,2,1,""],stations:[7,3,1,""],url_path:[7,2,1,""],validate_query:[7,2,1,""],variables:[7,3,1,""]},"siphon.radarserver.Station":{__init__:[7,3,1,""],count:[7,2,1,""],elevation:[7,3,1,""],id:[7,3,1,""],index:[7,2,1,""],latitude:[7,3,1,""],longitude:[7,3,1,""],name:[7,3,1,""]},"siphon.simplewebservice":{wyoming:[8,0,0,"-"]},"siphon.simplewebservice.wyoming":{WyomingUpperAir:[8,1,1,""]},"siphon.simplewebservice.wyoming.WyomingUpperAir":{__init__:[8,2,1,""],request_data:[8,7,1,""]},siphon:{catalog:[1,0,0,"-"],http_util:[2,0,0,"-"],metadata:[4,0,0,"-"],ncss:[5,0,0,"-"],ncss_dataset:[6,0,0,"-"],radarserver:[7,0,0,"-"],simplewebservice:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:staticmethod","7":"py:classmethod"},terms:{"105w":[15,16],"136e37b":10,"20171118_2356":1,"40n":[15,16],"50m":14,"break":[0,18],"byte":[5,7],"case":[11,12,14,15,16],"class":[1,2,4,5,6,7,8,14,15,16],"default":[1,2,4,5],"final":[0,10,12],"float":[2,5,6,7],"function":[2,5,7,8,13,16,18],"import":[9,11,12,14,15,16,17],"int":5,"long":14,"new":[0,1,2,5,7,10,12,14,15,16],"public":18,"return":[0,1,2,5,6,7,8,12,14,15,16,17],"static":5,"true":[5,15,16],"try":0,"while":[10,18],For:[0,1,10,18],GFS:[14,15,16],N0S:12,N1S:12,N2S:12,N3S:12,One:[2,5,7],TDS:[1,4,5,7,13,14,15,16],The:[0,1,2,4,5,7,8,10,12,14,15,16,18,19],Then:[10,12],There:[0,10],These:[1,2,19],Use:[2,5,7,12,14,15,16],Used:5,Using:[10,12],WMS:1,__future__:11,__init__:[1,4,5,6,7,8],__iter__:2,_version:10,aaron:0,about:[1,5,7,18],accept:[0,5,14,15,16],accept_list:6,access:[1,2,5,6,7,9,12,14,15,16,18],access_el:1,access_method:1,access_url:[1,12],access_with_servic:1,accessor:12,accur:7,acknowledg:0,actual:14,add:[0,2,5,7,9,10,14],add_access_element_info:1,add_featur:14,add_lonlat:5,add_query_paramet:[2,5,7],added:10,addit:[0,2,10],address:[0,1,9],adher:10,admin_1_states_provinces_lin:14,administr:10,adopt:10,against:10,agent:2,agre:0,agreement:0,air:8,alia:7,all:[1,2,5,7,10,13,14,15,16],all_servic:1,all_tim:[2,5,7],allow:1,almost:12,alpha:14,alreadi:0,also:[2,10,14,15,16,19],altern:0,alwai:1,analys:11,ani:[0,1,2,5,7,10,14],annual:18,anyth:[2,5,7],api:[2,10,18],applic:18,appropri:[1,2,4,5,7,10,12],approxim:16,arbitrari:[2,5,7,8],archiv:[8,10,17],argument:[2,5,7,8],arm:9,around:2,arrai:[5,12],arrang:10,ask:[12,14,15,16],assembl:[2,5,7],assess:0,assign:[1,2,5,7],associ:1,assum:10,atmospher:9,attribut:[6,14,15,17],author:[9,10],autom:10,automat:[0,10],avail:[1,5,7,9,10,12,18],awar:0,ax2:15,axes:[6,14],axi:15,azimuth:12,badqueryerror:[2,7],bag:10,balloon:13,base:[1,2,5,7,10,19],base_tds_url:1,base_url:1,basereflectivitydr:12,basic:[13,14],basic_usag:11,bdist_wheel:10,beam:0,been:[2,5,7],befor:10,begin:6,beginn:0,behind:0,being:0,believ:0,below:[0,9],best:[14,15,16],best_d:[14,15,16],best_gf:[14,15,16],better:[10,11],big:10,black:14,bless:18,blind:10,bool:[2,5,7],both:0,bottom:5,boulder:9,bound:[2,5,6,7,14],boundari:14,box:[2,5,7,14],branch:10,broken:10,brown:10,bug:18,bugfix:[0,10],buggi:10,build:[0,1,10,19],built:10,call:[2,5,7,10],callabl:5,can:[2,5,7,10,12,14,15,16,19],cannot:7,capabl:1,care:0,cartesian:12,cartopi:13,cat:11,catalog:[3,4,7,12,13,14,15,16],catalog_ref:[1,11],catalog_url:[1,12],catalogref:[1,7],categori:14,ccr:14,ccs039:12,cdmr:[10,12],cdmremot:[1,12],cfeatur:14,chain:[2,5,7,12],chanc:[0,10],chang:[0,18],charact:10,chastang:9,chat:0,chatroom:18,check:[2,5,7,10,12],chosen:12,chri:0,citat:9,cite:18,cla:0,classmethod:8,clean:[0,10],clear:2,client:[1,4],clone:0,closest:1,cmap:14,code:[1,2,5,7,11,12,13,14,15,16,17,18,19],codecov:10,collect:[0,1,9,14,15,16,18],color:14,colorado:9,colorbar:14,column:17,com:[0,9],combin:[5,14],combine_dict:5,combine_xml_point:5,come:[5,10,19],comment:0,commit:[0,10],commun:[0,1,18],compar:1,compat:1,complet:0,compliant:5,compos:[2,5,7],compound:1,compoundservic:1,confid:10,configur:10,consid:[0,18],consider:0,consist:0,construct:[5,6,7,14,15,16],contact:0,contain:[1,2,4,5,6,7,8,10,11,14,15,16,18],content:[2,5],continu:10,contour:14,contourf:14,contributor:0,convert:[12,14,16],coolwarm:14,coordin:[5,6,12,14,15],coordinate_transform:6,copi:10,correct:[10,15],correctli:10,correspond:[1,14,15,16],cos:12,could:10,count:7,coupl:0,coverag:[5,7,10],creat:[0,1,2,5,7,10,12,14,15,16,17],create_http_sess:2,critic:0,crs:14,csv:5,cultur:14,current:[0,1,10,11,14,15,18,19],d6cn72nw:9,daa:12,dai:[0,1,16],data:[1,2,5,7,8,11,12,13,14,15,16,18],datafram:[8,17],datalim:12,dataqueri:[2,5,7],dataset:[1,5,6,7,9,12,13,14,15,16],datasetcollect:1,date:[1,2,8,14,17],datetim:[1,2,5,6,7,8,12,14,15,16,17],daylight:2,default_unit_handl:5,defin:[1,6],deg2rad:12,deg:14,degc:17,degre:[2,5,7,14,15,16,17],degree_east:6,degree_north:6,delet:[5,10],deletetempfil:5,denver:12,depend:5,describ:10,design:18,desir:[1,5,8],detail:2,determin:[2,5,7],devel:10,develop:[0,18],deviat:10,dewpoint:17,dhr:12,dict:[1,4,6,7],dictionari:[1,2,4,5,6,12,17],dimens:[5,14,15],dir:10,direct:[5,12,17,18],directli:10,directori:[10,19],dirti:10,discuss:[0,18],dist:10,distribut:10,divers:0,doc8:10,doc:[6,10],docstr:10,document:[0,6,19],dod:12,dodsc:12,doe:2,doesn:0,doi:9,doing:10,don:0,done:10,down:10,download:[1,5,7,8,11,12,13,14,15,16,17,18,19],dpa:12,dpr:12,driven:0,dsd:12,dsp:12,dst:2,dta:12,dtype:17,du3:12,du6:12,dure:10,dvl:12,each:[0,14],earli:18,easi:10,easiest:19,easili:10,east:[2,5,6,7,14],eastern:14,edg:5,edgecolor:14,edu:[11,12,14,15,16],eet:12,either:[1,10],elem:[5,7],element:[1,2,4,5,6,7,16],element_nod:1,elev:7,elimin:10,els:10,empti:[5,7],enabl:1,encod:[12,14,15,16],end:[1,2,5,6,7,10],endpoint:[2,5,7,8],enforc:10,ensur:[2,5,7,10],entir:[10,16],entri:4,env:10,environ:10,equal:12,equat:[2,5,7],equival:5,escap:2,etc:[0,1],even:[0,10],everi:10,everyon:0,everyth:10,exact:5,exampl:[0,1,9,10,11,14,17,18],examples_jupyt:13,examples_python:13,except:[2,5],exclud:10,exist:[1,2,5,7],expand:[5,7],expect:[0,2],explan:0,express:1,extend:1,extent:14,extract:1,facecolor:14,facilit:[14,15,16],fahrenheit:14,fail:2,fan:10,featur:[0,14,18],featuredataset:6,feedback:10,feel:0,fetch:[5,7],few:[0,15,16],field:7,fig:[12,14,15,16],figsiz:[12,14,15,16],figur:14,file:[0,1,2,5,7,10,12,14,15,16],filenam:1,fileserv:12,filter:1,filter_time_nearest:1,filter_time_rang:1,find:[0,1,12],first:[0,7,12,14,15,16],fix:[0,10],flag:10,flake8:[0,10],flatten:[10,14],float64:17,fmt:5,fname:5,fobj:2,focus:18,follow:[0,1,12,19],fontsiz:14,forecast:[11,14,15,16],forev:10,fork:0,form:[2,5,7],format:[2,5,10,13,14,15,16],formul:2,fortun:16,found:[1,12,19],fraction:14,free:0,from:[0,1,2,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19],ftg:12,full:[1,2,5,7],fulli:1,fun:18,g136e37b:10,galleri:[11,12,13,14,15,16,17,18],gate:12,gener:[0,6,10,11,12,14,15,16,17],geodet:14,get:[1,2,5,7,10,12,14,15,16],get_catalog:[7,12],get_catalog_raw:7,get_data:[5,14,15,16],get_data_raw:5,get_latest_access_url:1,get_path:[2,5,7],get_queri:[2,5,7],get_radarserver_dataset:[7,12],git:[0,10],github:[0,9,10,18,19],gitignor:0,gitter:[0,18],give:[10,14],given:[1,2,5,7],global:[14,15,16],global_0p25deg:14,global_0p5deg:[15,16],goal:0,good:[0,10,14],grab:[10,11,19],great:0,grib:[14,15,16],grid:[5,6,14,15,16],gridaspoint:6,gridset:6,group:1,guid:0,guidelin:0,half:[15,16],handl:[0,5,7,12,14,15,16],handle_unit:5,happen:0,hard:0,has:[0,1,5,7,10,16,18],hash:10,have:[0,2,5,7,10,12],header:5,hear:0,height:17,help:[0,1,4,7,12],helper:[7,16],here:0,hhc:12,hide:10,histori:10,hit:10,hold:[1,4,6],horizont:5,host:[10,18],hour:[1,14,16],how:17,hpa:17,href:1,html:19,http:[1,2,5,7,9,11,12,14,15,16,19],http_util:3,httpendpoint:[2,5],httperror:[2,5,7],httpserver:[1,12],humid:15,icao:8,idd:12,idea:10,ident:12,identifi:[1,8,10,17],ignor:5,iii:12,immedi:0,implement:2,improv:0,includ:[0,2,5,7,10,18],inclus:1,incorpor:0,increas:0,index:[1,3,7,17],indexablemap:1,indic:[1,10],inform:[0,1,4,5,6,7,15,16],inherit:4,initi:[1,4,5,6,7,8],inspect:17,instal:[0,10],instanc:[1,2,5,7,10,12,14,15,16],instead:5,instruct:19,integ:7,integr:[0,10],interest:[0,10,14,15,16],interfac:[2,12],introduc:0,ipynb:[11,12,14,15,16,17],ipython:10,irrelev:0,is_resolv:1,isnan:12,iso:[2,6],issu:[0,18],item:[0,1,2,5,7],iter:[2,5,7],itself:12,john:9,join:18,julien:9,jupyt:[0,11,12,13,14,15,16,17],just:[0,5,10,14,18],keep:10,kei:[1,15,16,17],kelvin:14,keyword:[1,2,5,7,8],knot:17,kwarg:[2,5,7,8],label:0,last:15,lat:[2,5,7,14],lat_2d:14,lat_lon_box:6,lat_val:14,lat_var:14,latest:[1,10],latitud:[2,5,6,7,14,15,16],learn:0,least:0,leeman:9,left:5,length:10,letter:8,level3:12,level3_ftg_n0q_20171219_1529:12,level:[1,5,6,7,12,15,16],licens:0,lifeblood:10,like:[0,1,2,5,10],limit:10,line:[2,5,7,10],linestyl:14,linewidth:[14,15,16],linter:0,list:[0,1,5,6,7,9,11,12,14,15,16,18],live:18,local:[1,10],locat:[6,14],logic:[0,10],lon:[2,5,7,14],lon_2d:14,lon_val:14,lon_var:14,longer:10,longitud:[2,5,6,7,14,15,16],lonlat_box:[2,5,7,14],lonlat_point:[2,5,7,15,16],look:[0,1,10,12,15,16],loop:1,love:0,lowest:12,made:[0,10,16],mai:[0,6,9,18],mail:[0,18],maintain:0,major:10,make:[0,1,2,5,7,12,14,17],make_access_url:1,manag:[0,10],mani:[0,18],manifest:10,manner:5,map:[7,14],marker:14,markers:14,mask:12,master:10,match:[1,7,15],materi:18,matplotlib:[12,14,15,16],max:15,max_i:5,max_x:5,mean:10,member:0,mention:0,merg:10,meridian:[2,5,7],meshgrid:14,messag:0,metadata:[1,2,3,5,7,15,16],metadata_in:4,meteorolog:18,meter:17,method:[1,6,12],metpi:18,meurer:0,mfl:17,microsecond:1,might:0,mimetyp:5,min:15,min_i:5,min_x:5,minim:0,minimum:10,minor:10,minut:[0,1,11,12,14,15,16,17],miss:[1,6,10],mit:18,model:[11,16],modifi:[2,5,7],modul:[3,14,15,16],moment:10,monitor:[0,10],month:1,more:[0,2,5,7,15,16,18],most:10,mostli:10,multipl:[0,2,5,7],must:0,n0c:12,n0h:12,n0k:12,n0m:12,n0q:12,n0r:12,n0u:12,n0v:12,n0x:12,n0z:12,n1c:12,n1h:12,n1k:12,n1m:12,n1p:12,n1q:12,n1u:12,n1x:12,n2c:12,n2h:12,n2k:12,n2m:12,n2q:12,n2u:12,n2x:12,n3c:12,n3h:12,n3k:12,n3m:12,n3q:12,n3u:12,n3x:12,nac:12,nah:12,nak:12,nam:12,name:[1,2,5,7,10,14,15,16,17],namedtupl:7,naq:12,nativ:5,naturalearthfeatur:14,nau:12,nax:12,nbc:12,nbh:12,nbk:12,nbm:12,nbq:12,nbu:12,nbx:12,ncep:[14,15,16],ncr:12,ncss:[3,6],ncss_cartopy_exampl:14,ncss_dataset:3,ncss_exampl:15,ncss_timeseries_exampl:16,ncssdataset:[5,6],ncssqueri:5,nearest:14,necessari:10,need:[0,6,10,12,14],net:12,netcdf4:[1,14,15,16,18],netcdf:[5,6,12,13,14,15,16,18],netcdfsubset:1,newli:5,nexrad:12,next:16,nice:10,nid:12,nmd:12,node:[1,4,6],non:10,none:[1,2,4,5,7,12,14],north:[2,5,6,7,14],northern:14,note:[6,10,14,15,16],notebook:[0,11,12,13,14,15,16,17],noth:[2,10],now:[12,14,15,16],nst:12,ntp:12,num2dat:[14,16],number:[7,10,14,16],numpi:[5,10,12,14,19],nvl:12,nvw:12,object:[1,2,4,6,12,14,15,16,17],observ:[8,11],obtain:1,occurr:7,ocean:9,off:0,offici:18,offset:2,often:0,oha:12,onc:[0,10],one:[0,1,2,5,7,9,10,12],onli:[1,5,6,10],onlin:9,open:[0,1,18],opendap:[1,12],oper:0,option:[1,2,4,5,7,9,10],ordereddict:1,org:19,organ:9,other:[2,5,7,15,16],our:[0,2,12,14,15,16],out:[10,11,12,14,15,16,17],outlin:10,output:16,outset:10,over:1,overrid:2,own:[0,1],packag:[10,19],page:10,pair:[2,5,7],panda:[8,17],pandoc:10,paper:10,param:[2,5,7],paramet:[1,2,4,5,6,7,8,12],parent:4,pars:[1,2,4,5,6,7,8,12,14,15,16],parse_csv_dataset:5,parse_csv_head:5,parse_csv_respons:5,parse_iso_d:2,parse_station_t:7,parse_xml:5,parse_xml_dataset:5,parse_xml_point:5,parse_xml_st:7,part:[0,6,10],particular:[1,5],pass:[0,2,5,7,10,12],past:10,path:[1,2,5,7,10],pattern:1,pcolormesh:12,peopl:0,pep8:[0,10],perfect:0,perform:10,pip:[0,10,19],place:[2,5,7],placehold:11,plai:9,platecarre:14,pleas:[0,9,18],pleasant:0,plot:[12,14,15,16],plt:[12,14,15,16],point:[0,2,5,6,7,12,14,15,16],pointfeaturecollect:6,polar:12,possibl:[0,2],present:7,press:15,press_nam:15,press_val:15,pressur:[15,17],presum:2,prime:[2,5,7],print:[11,12,14,15,16,17],print_funct:11,problem:0,process:[0,10],product:[11,12],project:[0,5,10,14],projection_box:5,proper:[1,5,7,10],properli:[2,14,15,16],proport:0,protobuf:19,provid:[1,2,5,7,12,14],pta:12,pull:[10,12,14,15,16,17],push:[0,10],pyplot:[12,14,15,16],pytest:[0,10],python:[0,1,9,10,11,12,13,14,15,16,17,18,19],qualifi:1,quarter:14,queri:[1,2,5,7,13,14,15,16,17],question:18,radar:[7,11,13],radar_server_level_3:12,radarqueri:7,radarserv:[3,12],rais:[1,2,5,7],random:1,rang:[1,2,5,7,12,16],rational:0,raw:[5,7],read:[1,4,6,8,11],read_netcdf:5,reader:12,readi:16,readm:10,reason:16,rebas:10,recent:10,reciproc:0,recommend:19,recreat:10,reduc:14,ref:[1,12],refer:[1,7,9,11,12,14],referenc:1,reflect:12,reftime1:14,regex:1,regist:5,registri:5,regular:1,rel:[2,5,7,15,16],relat:0,relative_humidity_isobar:15,relh:15,reli:10,remot:[1,9,11,13,18],remote_access:1,remote_open:1,remov:14,renam:14,repeat:[2,5,7],replac:[2,5,7],repo:[0,10],report:18,repositori:10,repres:[1,2,4,5,6,7,12],represent:[5,14,15,16],reproduc:0,request:[1,2,5,7,10,12,13,14,15,16,18,19],request_data:[8,17],requir:[2,5,7,12],research:[0,9],resolut:14,resolv:1,resolve_url:1,resp:[2,5,7],respect:0,respons:[2,5,7],responseregistri:5,result:[2,5,7],retriev:[5,8],right:[5,10],rng:12,role:9,room:0,root:[7,10],rtd:10,run:[0,10,11,12,14,15,16,17,19],ryan:9,satellit:11,save:[1,2],scale:14,scipi:19,scipylib:19,script:[11,12,14,15,16,17],sdist:10,sean:9,second:[1,10,11,12,14,15,16,17],see:[0,7,10,12,14,15,16,18],seen:19,self:[2,5,7],send:[5,7],sens:10,sensibl:10,septemb:9,sequenc:[2,5,7],seri:[0,13,14,15],server:[1,2,5,7,11,12,14,15,16,18],servic:[1,5,6,7,8,10,13,14,15,16],service_nod:1,service_typ:1,session:2,set:[2,5,6,7,8,10,14,19],set_aspect:12,set_ext:14,set_titl:14,set_xlabel:[15,16],set_xlim:12,set_ylabel:[15,16],set_ylim:[12,15],setup:[0,10,19],share:15,should:[0,1,5,8,10,18],show:[6,12,14,17],signatur:7,similar:1,simpl:[2,8],simpleservic:1,simplewebservic:[3,17],simplewebswervic:17,simpli:10,simplifi:[5,7],sin:[10,12],sinc:[10,14],singl:[0,1,5,14,15,16],siphon:[0,10,11,12,14,15,16,17,19],site_id:8,size:[0,14],skip:5,small:10,smaller:10,softwar:9,some:[0,2,10,18],someth:0,sound:17,sourc:[0,8,10,11,12,13,14,15,16,17,18,19],south:[2,5,6,7,14],southern:14,space:[5,7],spatial:[2,5,7],special:0,specif:[0,2,5,7,17],specifi:[1,2,5,7],speed:[10,17],sphinx:[10,11,12,13,14,15,16,17],split:[14,15],squash:10,squeez:[14,15,16],squish:5,stabl:[10,18],stage:18,stai:10,standard:10,standard_nam:[15,16],start:[1,2,5,7,16],state:14,states_provinc:14,station:[7,8,12,17],still:18,stn:7,stop:7,store:17,str:[1,2,4,5,6,7,8],stride:5,string:[1,2,5,6,7,10,12,14,15,16,17],stuck:0,studi:[11,12],style:0,subclass:2,submiss:0,submit:0,subplot:[12,15,16],subset:[1,5,6,13,14,15,16],success:0,suffici:2,suggest:0,suitabl:14,support:[1,2,4,5,6,7,10,16,17,18,19],sure:[0,12],surfac:[14,16],system:0,tackl:0,tag:[4,5,7,10],take:[5,10],taken:0,talk:1,target:10,tdscatalog:[1,7,11,12,14,15,16],tdscatalogmetadata:[4,7],tdwr:12,technolog:18,temp:[14,15,16],temp_val:14,temp_var:14,temperatur:[14,15,16,17],temperature_isobar:[15,16],temperature_surfac:14,tempor:[2,5,6,7],temporari:5,tempt:10,term:18,test:0,than:[2,5,7],thank:0,thei:[0,1,10],them:[2,10,12],theme:10,therefor:10,thi:[0,1,2,5,7,10,11,12,14,15,16,17,19],thin:2,thing:[0,10,18],those:[1,10],thredd:[1,2,5,7,12,13,14,15,16,18],three:8,through:[0,10,18,19],tilt:12,time1:14,time:[0,1,2,5,6,7,8,10,11,12,13,14,15,17],time_nam:14,time_rang:[2,5,7,16],time_span:6,time_v:[14,16],time_var:14,timedelta:16,timeseri:16,timezon:2,titl:[1,9,14],togeth:[2,5,7,10],toolkit:18,top:[1,2,5,6,7,10,12],total:[11,12,14,15,16,17],track:10,tracker:[0,18],train:18,transform:[6,14],travi:[0,10],tupl:[2,5,7],turn:2,tutori:[0,18],twine:10,twini:15,type:[1,2,5,6,7,8],typic:1,tzname:2,u00b0f:14,u_wind:17,ucar:[11,12,14,15,16],under:18,unidata:[0,9,11,18],uniform:10,unit:[0,5,10,14,15,16,17],unit_handl:5,univers:8,unrel:0,updat:10,upload:10,upon:[0,10],upper:8,ups:10,url:[1,2,5,6,7,9,12],url_path:[1,2,5,7],urlopen:2,use:[0,1,8,10,12,14,15,16,17,18],used:[1,5,10],useful:[0,14],user:[0,2,18],usernam:0,uses:[1,2,10,14],using:[0,1,2,5,9,10,12,13,14,15,16,18],usual:12,utc:[2,16],utcnow:[12,14,15,16],utcoffset:2,util:[0,2,9,18],v_wind:17,valid:[2,5,6,7,12],validate_queri:[2,5,7,12],valu:[1,2,5,7,12,14,15,16],valueerror:[1,7],var_nam:[2,5,7],variabl:[2,5,6,7,12,14,15,16,17],variou:[2,5,7],version:[0,9,14,15,16,19],vertic:[5,15,16],vertical_level:[5,16],via:[5,7,10],video:0,virtual:[14,15,16],vmajor:10,wai:[0,2,19],wait:0,want:[0,15],warn:5,web:8,well:[0,2,5,7,10,12,14,15,16,18,19],were:0,west:[2,5,6,7,14],western:14,what:[10,12],wheel:10,when:[0,1,2,5,7,10,12],where:14,whether:[1,2,5,7],which:[0,1,2,5,6,7,8,10,12,14,15,16],whose:1,willing:0,wish:0,within:[0,1,6,10,11,19],won:18,work:[0,10,18],workflow:0,workshop:18,world:10,wors:10,wrap:[2,5,7],wrapper:2,write:0,written:[0,10],www:19,wyom:[3,13],wyoming_request:17,wyomingupperair:[8,17],xml:[1,5,6,7,11,14,15,16],year:[1,9],yield:2,yml:10,you:[10,18],your:[0,9,19],yourself:0,zip:[10,13],zorder:14},titles:["Contributing","<code class=\"docutils literal\"><span class=\"pre\">siphon.catalog</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.http_util</span></code>","The Siphon API","<code class=\"docutils literal\"><span class=\"pre\">siphon.metadata</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.ncss</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.ncss_dataset</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.radarserver</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.simplewebservice</span></code>","Citing Siphon","Developer\u2019s Guide","THREDDS Catalog","TDS Radar Query Service","Siphon Examples","NCSS and CartoPy","Basic NCSS","NCSS Time Series","Wyoming Upper Air Data Request","Siphon","Installation Guide"],titleterms:{AMS:9,TDS:12,The:3,air:[13,17],api:3,basic:15,bibtex:9,bug:0,can:0,cartopi:14,catalog:[1,11],chang:10,channel:0,cite:9,code:[0,10],conda:10,contact:18,contribut:0,data:17,develop:10,document:10,entri:9,exampl:[13,19],gener:13,get:0,ground:0,guid:[10,19],how:0,http_util:2,instal:19,introduct:0,journal:9,licens:18,make:10,metadata:4,ncss:[5,13,14,15,16],ncss_dataset:6,other:[0,10,18],project:18,pull:0,queri:12,radar:12,radarserv:7,relat:18,releas:10,report:0,request:[0,17],requir:[10,19],resourc:18,review:0,rule:0,seri:16,servic:12,simplewebservic:8,siphon:[1,2,3,4,5,6,7,8,9,13,18],start:0,style:[9,10],talk:0,test:10,thredd:11,time:16,tool:10,upper:[13,17],version:10,what:0,wyom:[8,17],you:0}})