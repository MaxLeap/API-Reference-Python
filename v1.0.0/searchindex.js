Search.setIndex({envversion:46,filenames:["ML","ML.acl","ML.client","ML.errors","ML.fields","ML.file_","ML.geo_point","ML.mime_type","ML.object_","ML.operation","ML.query","ML.relation","ML.role","ML.server","ML.user","ML.utils","index","modules"],objects:{"":{Request:[13,3,1,""],Response:[13,3,1,""],Server:[13,7,1,""]},"ML.acl":{ACL:[1,3,1,""]},"ML.acl.ACL":{dump:[1,2,1,""],get_public_read_access:[1,2,1,""],get_public_write_access:[1,2,1,""],get_read_access:[1,2,1,""],get_role_read_access:[1,2,1,""],get_role_write_access:[1,2,1,""],get_write_access:[1,2,1,""],set_public_read_access:[1,2,1,""],set_public_write_access:[1,2,1,""],set_read_access:[1,2,1,""],set_role_read_access:[1,2,1,""],set_role_write_access:[1,2,1,""],set_write_access:[1,2,1,""]},"ML.client":{"delete":[2,1,1,""],UserPrincipal:[2,3,1,""],by_hook:[2,1,1,""],change_region:[2,1,1,""],check_error:[2,1,1,""],get:[2,1,1,""],get_master_principal:[2,1,1,""],handler_hook:[2,1,1,""],init:[2,1,1,""],need_init:[2,1,1,""],post:[2,1,1,""],put:[2,1,1,""]},"ML.client.UserPrincipal":{gen_headers:[2,2,1,""],injection:[2,2,1,""],validate:[2,2,1,""]},"ML.errors":{MaxLeapError:[3,5,1,""]},"ML.fields":{AnyField:[4,3,1,""],NumberField:[4,3,1,""],StringField:[4,3,1,""]},"ML.file_":{File:[5,3,1,""]},"ML.file_.File":{create_with_url:[5,4,1,""],create_without_data:[5,4,1,""],destroy:[5,2,1,""],get_acl:[5,2,1,""],get_thumbnail_url:[5,2,1,""],metadata:[5,6,1,""],name:[5,6,1,""],owner_id:[5,6,1,""],save:[5,2,1,""],set_acl:[5,2,1,""],size:[5,6,1,""],url:[5,6,1,""]},"ML.geo_point":{GeoPoint:[6,3,1,""]},"ML.geo_point.GeoPoint":{dump:[6,2,1,""],kilometers_to:[6,2,1,""],latitude:[6,6,1,""],longitude:[6,6,1,""],miles_to:[6,2,1,""],radians_to:[6,2,1,""]},"ML.object_":{Object:[8,3,1,""],ObjectMeta:[8,3,1,""]},"ML.object_.Object":{add:[8,2,1,""],add_unique:[8,2,1,""],clear:[8,2,1,""],create:[8,4,1,""],create_without_data:[8,4,1,""],destroy:[8,2,1,""],dump:[8,2,1,""],extend:[8,4,1,""],fetch:[8,2,1,""],get:[8,2,1,""],get_acl:[8,2,1,""],has:[8,2,1,""],increment:[8,2,1,""],is_dirty:[8,2,1,""],is_existed:[8,2,1,""],is_new:[8,2,1,""],op:[8,2,1,""],parse:[8,2,1,""],relation:[8,2,1,""],remove:[8,2,1,""],save:[8,2,1,""],set:[8,2,1,""],set_acl:[8,2,1,""],unset:[8,2,1,""],validate:[8,2,1,""]},"ML.operation":{Add:[9,3,1,""],AddUnique:[9,3,1,""],BaseOp:[9,3,1,""],Increment:[9,3,1,""],Relation:[9,3,1,""],Remove:[9,3,1,""],Set:[9,3,1,""],Unset:[9,3,1,""]},"ML.operation.Add":{dump:[9,2,1,""],objects:[9,6,1,""]},"ML.operation.AddUnique":{dump:[9,2,1,""],objects:[9,6,1,""]},"ML.operation.BaseOp":{dump:[9,2,1,""]},"ML.operation.Increment":{amount:[9,6,1,""],dump:[9,2,1,""]},"ML.operation.Relation":{added:[9,6,1,""],dump:[9,2,1,""],removed:[9,6,1,""]},"ML.operation.Remove":{dump:[9,2,1,""],objects:[9,6,1,""]},"ML.operation.Set":{dump:[9,2,1,""],value:[9,6,1,""]},"ML.operation.Unset":{dump:[9,2,1,""]},"ML.query":{Query:[10,3,1,""]},"ML.query.Query":{add_ascending:[10,2,1,""],add_descending:[10,2,1,""],and_:[10,4,1,""],ascending:[10,2,1,""],contained_in:[10,2,1,""],contains:[10,2,1,""],contains_all:[10,2,1,""],count:[10,2,1,""],descending:[10,2,1,""],destroy_all:[10,2,1,""],does_not_exists:[10,2,1,""],does_not_match_key_in_query:[10,2,1,""],does_not_match_query:[10,2,1,""],dump:[10,2,1,""],endswith:[10,2,1,""],equal_to:[10,2,1,""],exists:[10,2,1,""],find:[10,2,1,""],first:[10,2,1,""],get:[10,2,1,""],greater_than:[10,2,1,""],greater_than_or_equal_to:[10,2,1,""],include:[10,2,1,""],less_than:[10,2,1,""],less_than_or_equal_to:[10,2,1,""],limit:[10,2,1,""],matched:[10,2,1,""],matched_key_in_query:[10,2,1,""],matches_query:[10,2,1,""],near:[10,2,1,""],not_contained_in:[10,2,1,""],not_equal_to:[10,2,1,""],or_:[10,4,1,""],select:[10,2,1,""],skip:[10,2,1,""],startswith:[10,2,1,""],within_geo_box:[10,2,1,""],within_kilometers:[10,2,1,""],within_miles:[10,2,1,""],within_radians:[10,2,1,""]},"ML.relation":{Relation:[11,3,1,""]},"ML.relation.Relation":{add:[11,2,1,""],dump:[11,2,1,""],query:[11,2,1,""],remove:[11,2,1,""],reverse_query:[11,4,1,""]},"ML.role":{Role:[12,3,1,""]},"ML.role.Role":{get_name:[12,2,1,""],get_roles:[12,2,1,""],get_users:[12,2,1,""],set_name:[12,2,1,""],validate:[12,2,1,""]},"ML.user":{User:[14,3,1,""]},"ML.user.User":{is_current:[14,6,1,""],login:[14,2,1,""],save:[14,2,1,""],sign_up:[14,2,1,""]},"ML.utils":{decode:[15,1,1,""],encode:[15,1,1,""],get_dumpable_types:[15,1,1,""],response_to_json:[15,1,1,""],traverse_object:[15,1,1,""]},ML:{acl:[1,0,0,"-"],client:[2,0,0,"-"],errors:[3,0,0,"-"],fields:[4,0,0,"-"],file_:[5,0,0,"-"],geo_point:[6,0,0,"-"],mime_type:[7,0,0,"-"],object_:[8,0,0,"-"],operation:[9,0,0,"-"],query:[10,0,0,"-"],relation:[11,0,0,"-"],role:[12,0,0,"-"],user:[14,0,0,"-"],utils:[15,0,0,"-"]},Request:{args:[13,6,1,""],base_url:[13,6,1,""],cookies:[13,6,1,""],data:[13,6,1,""],environ:[13,6,1,""],files:[13,6,1,""],form:[13,6,1,""],headers:[13,6,1,""],json:[13,6,1,""],method:[13,6,1,""],path:[13,6,1,""],script_root:[13,6,1,""],stream:[13,6,1,""],url:[13,6,1,""],url_root:[13,6,1,""],values:[13,6,1,""]},Server:{Function:[13,1,1,""],Job:[13,1,1,""],after_delete:[13,1,1,""],after_save:[13,1,1,""],after_update:[13,1,1,""],before_delete:[13,1,1,""],before_save:[13,1,1,""]}},objnames:{"0":["py","module","Python \u6a21\u5757"],"1":["py","function","Python \u51fd\u6570"],"2":["py","method","Python \u65b9\u6cd5"],"3":["py","class","Python \u7c7b"],"4":["py","classmethod","Python \u7c7b\u65b9\u6cd5"],"5":["py","exception","Python \u4f8b\u5916"],"6":["py","attribute","Python \u5c5e\u6027"],"7":["py","data","Python \u6570\u636e"]},objtypes:{"0":"py:module","1":"py:function","2":"py:method","3":"py:class","4":"py:classmethod","5":"py:exception","6":"py:attribute","7":"py:data"},terms:{"\u4e00\u4e2ahook\u5e94\u8be5\u662f\u8fd9\u6837\u4e00\u4e2a\u51fd\u6570":13,"\u4e0b\u6240\u6709\u7ed1\u5b9a\u7684\u7528\u6237":12,"\u4e0e\u53e6\u5916\u4e00\u4e2a\u67e5\u8be2\u5bf9\u8c61\u7684\u8fd4\u56de\u7ed3\u679c\u4e0d\u76f8\u540c":10,"\u4e0e\u53e6\u5916\u4e00\u4e2a\u67e5\u8be2\u5bf9\u8c61\u7684\u8fd4\u56de\u7ed3\u679c\u6307\u5b9a\u7684\u503c\u4e0d\u76f8\u540c":10,"\u4e0e\u53e6\u5916\u4e00\u4e2a\u67e5\u8be2\u5bf9\u8c61\u7684\u8fd4\u56de\u7ed3\u679c\u6307\u5b9a\u7684\u503c\u76f8\u540c":10,"\u4e0e\u53e6\u5916\u4e00\u4e2a\u67e5\u8be2\u5bf9\u8c61\u7684\u8fd4\u56de\u7ed3\u679c\u76f8\u540c":10,"\u4e24\u4e2a\u5b57\u6bb5":14,"\u4e2d\u5220\u9664\u4e00\u4e2a":11,"\u4e3a":12,"\u4e3a\u5f53\u524d\u5bf9\u8c61\u8bbe\u7f6e":8,"\u4e4b\u524d\u6307\u5b9a\u7684\u6392\u5e8f\u6761\u4ef6\u4f18\u5148\u7ea7\u66f4\u9ad8":10,"\u4ece\u4e00\u4e2a":11,"\u4ece\u670d\u52a1\u5668\u4e0a\u5220\u9664\u8fd9\u4e2a\u5bf9\u8c61":8,"\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u5f53\u524d\u5bf9\u8c61\u6240\u6709\u7684\u503c":8,"\u4ee3\u8868\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u5df2\u7ecf\u5b58\u5728\u7684\u5bf9\u8c61":8,"\u4ee5\u6307\u5b9a\u5b57\u7b26\u4e32\u5f00\u5934":10,"\u4ee5\u6307\u5b9a\u5b57\u7b26\u4e32\u7ed3\u5c3e":10,"\u4f8b\u5982":13,"\u4f9b\u94fe\u5f0f\u8c03\u7528":8,"\u503c\u7684":8,"\u5173\u8054\u5b50\u8868\u5b57\u6bb5\u540d":10,"\u5185\u5bb9\u7684":11,"\u521b\u5efa\u4e00\u4e2a":8,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237":14,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684":11,"\u521d\u59cb\u5316":2,"\u5224\u65ad\u5f53\u524d\u5bf9\u8c61\u662f\u5426\u5df2\u7ecf\u4fdd\u5b58\u81f3\u670d\u52a1\u5668":8,"\u5224\u65ad\u6b64\u5b57\u6bb5\u662f\u5426\u6709\u503c":8,"\u5305\u542b\u5b57\u6bb5\u540d":10,"\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32":10,"\u5343\u7c73":10,"\u53c2\u6570":[2,6,8,10,11,13],"\u53cd\u5411\u67e5\u8be2\u6240\u6709\u6307\u5411\u6b64":11,"\u53ef\u4ee5\u8c03\u7528":8,"\u53ef\u4ee5\u91cd\u590d\u8c03\u7528":10,"\u5426\u5219\u8fd4\u56de":8,"\u548c":14,"\u5728\u505a\u5206\u9875\u65f6\u5f88\u6709\u5e2e\u52a9":10,"\u5728\u5bf9\u8c61\u4e0a\u79fb\u9664\u6b64\u5b57\u6bb5":8,"\u5728\u5bf9\u8c61\u6b64\u5b57\u6bb5\u4e0a\u81ea\u589e\u5bf9\u5e94\u7684\u6570\u503c":8,"\u5728\u5bf9\u8c61\u6b64\u5b57\u6bb5\u5bf9\u5e94\u7684\u6570\u7ec4\u4e2d":8,"\u5728\u5bf9\u8c61\u6b64\u5b57\u6bb5\u5bf9\u5e94\u7684\u6570\u7ec4\u672b\u5c3e\u6dfb\u52a0\u6307\u5b9a\u5bf9\u8c61":8,"\u5728\u5f53\u524d\u5bf9\u8c61\u6b64\u5b57\u6bb5\u4e0a\u8d4b\u503c":8,"\u5728\u6570\u636e\u91cf\u6bd4\u8f83\u5927\u7684\u60c5\u51b5\u4e0b\u4f1a\u6bd4\u8f83\u6162":10,"\u5728\u670d\u52a1\u5668\u4e0a\u5220\u9664\u6240\u6709\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\u7684\u5bf9\u8c61":10,"\u57fa\u7c7b":[1,2,3,4,5,6,8,9,10,11,12,14],"\u589e\u52a0\u67e5\u8be2\u6392\u5e8f\u6761\u4ef6":10,"\u589e\u52a0\u67e5\u8be2\u6761\u4ef6":10,"\u5982\u679c\u4e0d\u8bbe\u7f6e":10,"\u5982\u679c\u4e0e\u672c\u5730\u503c\u4e0d\u540c":8,"\u5982\u679c\u6570\u503c\u6ca1\u6709\u6307\u5b9a":8,"\u5982\u679c\u6b64\u5bf9\u8c61\u5e76\u6ca1\u6709\u5305\u542b\u5728\u5b57\u6bb5\u4e2d":8,"\u5982\u679c\u7528\u6237\u540d\u548c\u5bc6\u7801\u6b63\u786e":14,"\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u6570\u91cf":10,"\u5982\u679c\u8fd4\u56de\u503c\u4e3a":13,"\u5982\u679c\u8fd4\u56de\u503c\u4e3aresponse\u5bf9\u8c61":13,"\u5b50\u7c7b":8,"\u5b50\u7c7b\u540d\u79f0":8,"\u5b50\u7c7b\u5bf9\u8c61":11,"\u5b57\u6bb5\u503c":8,"\u5b57\u6bb5\u540d":8,"\u5b9e\u4f8b":13,"\u5b9e\u4f8b\u6216\u8005none":13,"\u5bf9\u8c61":[10,11,13,14],"\u5bf9\u8c61\u5c5e\u6027":8,"\u5bf9\u8c61\u7684":8,"\u5c06\u4f1a\u8986\u76d6\u672c\u5730\u7684\u503c":8,"\u5c06\u5bf9\u8c61\u6570\u636e\u4fdd\u5b58\u81f3\u670d\u52a1\u5668":8,"\u5c06\u5f53\u524d\u5bf9\u8c61\u6240\u6709\u5b57\u6bb5\u5168\u90e8\u79fb\u9664":8,"\u5c06\u6307\u5b9a\u5bf9\u8c61\u5168\u90e8\u79fb\u9664":8,"\u5e94\u7528\u7684":2,"\u5e94\u8be5\u4f7f\u7528\u6b64\u65b9\u6cd5\u6765\u5c06\u6570\u636e\u4fdd\u5b58\u81f3\u670d\u52a1\u5668":14,"\u5f27\u5ea6":10,"\u5f53\u524d\u5bf9\u8c61":8,"\u5f53\u524d\u5bf9\u8c61\u4f7f\u7528\u7684princip":8,"\u5f53\u524d\u5bf9\u8c61\u7684":8,"\u5f53\u524d\u5bf9\u8c61\u7684\u5e8f\u5217\u5316\u7ed3\u679c":10,"\u5f53\u524d\u5bf9\u8c61\u7684\u7eac\u5ea6":6,"\u5f53\u524d\u5bf9\u8c61\u7684\u7ecf\u5ea6":6,"\u5f53\u6709\u503c\u65f6\u8fd4\u56de":8,"\u5f53\u8bf7\u6c42\u4ececloudcode\u53d1\u8d77\u7684\u65f6\u5019":2,"\u6216\u8005\u4e00\u4e2a\u5305\u542b":8,"\u6307\u5b9a\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u4e2d\u5305\u542b\u5173\u8054\u8868\u5b57\u6bb5":10,"\u6307\u5b9a\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u4e2d\u53ea\u5305\u542b\u67d0\u4e9b\u5b57\u6bb5":10,"\u6392\u5e8f\u5b57\u6bb5\u540d":10,"\u63a5\u53d7\u53c2\u6570\u4e3a\u4e00\u4e2a":13,"\u63d0\u4f9b\u5982\u4e0b\u65b9\u6cd5":13,"\u65b0\u521b\u5efa\u7684":14,"\u65b9\u6cd5":14,"\u65b9\u6cd5\u6765\u83b7\u53d6\u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e":8,"\u6700\u5927\u8fd4\u56de\u6570\u91cf\u4e3a":10,"\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u7528\u6237\u7684":14,"\u6784\u9020\u4e00\u4e2a\u65b0\u7684":10,"\u67e5\u8be2":10,"\u67e5\u8be2\u5730\u7406\u4f4d\u7f6e":10,"\u67e5\u8be2\u5b57\u6bb5\u7684\u503c\u5fc5\u987b\u4e3a\u6307\u5b9a\u503c":10,"\u67e5\u8be2\u5bf9\u8c61":10,"\u67e5\u8be2\u5bf9\u8c61\u8fd4\u56de\u7ed3\u679c\u7684\u5b57\u6bb5\u540d":10,"\u67e5\u8be2\u662f\u5426\u5ffd\u7565\u5927\u5c0f\u5199":10,"\u67e5\u8be2\u662f\u5426\u966a\u966a\u591a\u884c":10,"\u67e5\u8be2\u6761\u4ef6\u4e2d\u8df3\u8fc7\u6307\u5b9a\u4e2a\u6570\u7684\u5bf9\u8c61":10,"\u67e5\u8be2\u6761\u4ef6\u503c":10,"\u67e5\u8be2\u6761\u4ef6\u503c\u540d":10,"\u67e5\u8be2\u6761\u4ef6\u5b57\u6bb5\u540d":10,"\u67e5\u8be2\u6761\u4ef6\u7684\u503c":10,"\u67e5\u8be2\u6761\u4ef6\u7684\u5b57\u6bb5\u540d":10,"\u67e5\u8be2\u6b63\u5219\u8868\u8fbe\u5f0f":10,"\u67e5\u8be2\u7ed3\u679c":10,"\u6807\u5fd7\u4e3atrue":2,"\u6839\u636e":[8,10],"\u6839\u636e\u4f20\u5165\u7684":10,"\u6839\u636e\u53c2\u6570\u521b\u5efa\u4e00\u4e2a":8,"\u6839\u636e\u67e5\u8be2\u6761\u4ef6":10,"\u6839\u636e\u67e5\u8be2\u83b7\u53d6\u6700\u591a\u4e00\u4e2a\u5bf9\u8c61":10,"\u6bcf\u6b21\u8c03\u7528\u7684\u5305\u542b\u5185\u5bb9\u90fd\u5c06\u4f1a\u88ab\u8fd4\u56de":10,"\u6ca1\u6709\u6570\u636e\u7684\u5bf9\u8c61":8,"\u6d3e\u751f\u4e00\u4e2a\u65b0\u7684":8,"\u6d3e\u751f\u5b50\u7c7b\u7684\u5b9e\u4f8b":8,"\u6d3e\u751f\u7684\u5b50\u7c7b":8,"\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684":11,"\u7236\u7c7b\u4e2d":11,"\u7236\u7c7b\u540d\u79f0":11,"\u7528\u6237\u5bf9\u8c61\u4e0a\u5fc5\u987b\u5305\u542b":14,"\u7528\u6237function\u5e94\u8be5\u662f\u8fd9\u6837\u4e00\u4e2a\u51fd\u6570":13,"\u7528\u6237job\u5e94\u8be5\u662f\u8fd9\u6837\u4e00\u4e2a\u51fd\u6570":13,"\u7528\u6765\u6ce8\u518c\u4e00\u4e2a\u7279\u5b9a":13,"\u7528\u6765\u6ce8\u518c\u4e00\u4e2a\u7528\u6237function":13,"\u7528\u6765\u6ce8\u518c\u4e00\u4e2a\u7528\u6237job":13,"\u767b\u9646\u7528\u6237":14,"\u7684":[2,12,13],"\u7684\u5b50\u7c7b\u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61":8,"\u7684\u5b57\u6bb5\u540d":11,"\u7684\u7236\u5bf9\u8c61":11,"\u7b49\u540c\u4e8e":12,"\u800c\u4e0d\u662f\u4f7f\u7528":14,"\u81ea\u589e\u91cf":8,"\u81f3":11,"\u82f1\u91cc":10,"\u83b7\u53d6":12,"\u83b7\u53d6\u5305\u542b\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u5bf9\u8c61":10,"\u83b7\u53d6\u5bf9\u8c61\u5b57\u6bb5\u7684\u503c":8,"\u83b7\u53d6\u5f53\u524d":12,"\u83b7\u53d6\u6307\u5411":11,"\u88c5\u9970\u5668":13,"\u8981\u67e5\u8be2\u5bf9\u8c61\u7684":10,"\u8981\u6dfb\u52a0\u7684\u5bf9\u8c61":8,"\u8981\u79fb\u9664\u7684\u5bf9\u8c61":8,"\u8bbe\u7f6e":12,"\u8bbe\u7f6e\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u7684\u6570\u91cf":10,"\u8ddd\u79bb\u9650\u5b9a":10,"\u8fd4\u56de":[8,10,11],"\u8fd4\u56de\u53c2\u6570\u4e3a\u4e00\u4e2a":13,"\u8fd4\u56de\u5bf9\u8c61\u4e0a\u76f8\u5e94\u5b57\u6bb5\u7684":8,"\u8fd4\u56de\u5f53\u524d\u5bf9\u8c61\u7684":8,"\u8fd4\u56de\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\u7684\u5bf9\u8c61\u7684\u6570\u91cf":10,"\u8fd4\u56de\u7c7b\u578b":[6,8,10,11],"\u90a3\u4e48\u5c31\u4f1a\u77ed\u8def\u6389\u540e\u9762\u7684\u6267\u884c\u6d41\u7a0b":13,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u4e0d\u5305\u542b\u6307\u5b9a\u5b57\u6bb5":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u5305\u542b\u6307\u5b9a\u5b57\u6bb5":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u6307\u5b9a\u5b57\u6bb5\u6ee1\u8db3\u6307\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u6307\u5b9a\u5b57\u6bb5\u7684\u503c":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u6307\u5b9a\u6700\u77ed\u7684\u503c":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u4e0d\u5728\u67e5\u8be2\u503c\u5217\u8868\u4e2d":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u4e0e\u67e5\u8be2\u503c\u4e0d\u540c":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u5168\u90e8\u5305\u542b\u4e0e\u67e5\u8be2\u503c\u5217\u8868\u4e2d":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u5728\u67e5\u8be2\u503c\u5217\u8868\u4e2d":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u5927\u4e8e\u67e5\u8be2\u503c":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u5927\u4e8e\u7b49\u4e8e\u67e5\u8be2\u503c":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u5c0f\u4e8e\u67e5\u8be2\u503c":10,"\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u5c0f\u4e8e\u7b49\u4e8e\u67e5\u8be2\u503c":10,"\u9650\u5236\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u4ee5\u6307\u5b9a\u5b57\u6bb5\u5347\u5e8f\u6392\u5e8f":10,"\u9650\u5236\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u4ee5\u6307\u5b9a\u5b57\u6bb5\u964d\u5e8f\u6392\u5e8f":10,"\u9650\u5236\u7ed3\u679c\u7684\u6570\u91cf":10,"\u9650\u5236\u8303\u56f4\u4e1c\u5317\u89d2\u5750\u6807":10,"\u9650\u5236\u8303\u56f4\u897f\u5357\u89d2\u5750\u6807":10,"\u9650\u5236\u8fd4\u56de\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u503c\u7684\u4f4d\u7f6e\u4e0e\u7ed9\u5b9a\u5730\u7406\u4f4d\u7f6e\u4e34\u8fd1":10,"\u9650\u5236\u8fd4\u56de\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u503c\u7684\u4f4d\u7f6e\u5728\u6307\u5b9a\u5750\u6807\u8303\u56f4\u4e4b\u5185":10,"\u9650\u5236\u8fd4\u56de\u7ed3\u679c\u6307\u5b9a\u5b57\u6bb5\u503c\u7684\u4f4d\u7f6e\u5728\u67d0\u70b9\u7684\u4e00\u6bb5\u8ddd\u79bb\u4e4b\u5185":10,"\u9700\u8981\u4f7f\u7528\u591a\u6b21\u67e5\u8be2\u6765\u83b7\u53d6\u7ed3\u679c":10,"\u9700\u8981\u5220\u9664\u7684\u5bf9\u8c61\u6216\u5bf9\u8c61\u5217\u8868":11,"\u9700\u8981\u5305\u542b\u7684\u5b57\u7b26\u4e32":10,"\u9700\u8981\u6784\u9020\u7684\u5b50\u67e5\u8be2\u5217\u8868":10,"\u9700\u8981\u67e5\u8be2\u7684\u5730\u7406\u4f4d\u7f6e":10,"\u9700\u8981\u67e5\u8be2\u7684\u5b57\u7b26\u4e32":10,"\u9700\u8981\u6dfb\u52a0\u7684\u5bf9\u8c61\u6216\u5bf9\u8c61\u5217\u8868":11,"\u9700\u8981\u8c03\u7528\u7684function":13,"\u9700\u8981\u8c03\u7528\u7684job":13,"\u9700\u8981\u8df3\u8fc7\u5bf9\u8c61\u7684\u4e2a\u6570":10,"\u9ed8\u8ba4\u4e0d\u5339\u914d":10,"\u9ed8\u8ba4\u4e0d\u5ffd\u7565":10,"\u9ed8\u8ba4\u4e3a":10,"\u9ed8\u8ba4\u4e3a\u4e00":8,"case":13,"class":[1,2,4,5,6,8,9,10,11,12,13,14],"default":13,"float":6,"function":13,"function\u88c5\u9970\u5668":13,"int":10,"job\u88c5\u9970\u5668":13,"return":[6,13],"server\u4e3a\u5355\u4f8b\u5b9e\u4f8b":13,"server\u5b9e\u4f8b\u8fd8\u63d0\u4f9b\u4e00\u4e9b\u672c\u5730\u6d4b\u8bd5function\u548cjob\u7684\u65b9\u6cd5":13,"server\u6a21\u5757\u4e3a\u7528\u6237\u63d0\u4f9bcloudcode\u7684\u6ce8\u518c\u63a5\u53e3\u548c\u672c\u5730\u6d4b\u8bd5\u63a5\u53e3":13,"true":[5,8,13],"userprincipal\u5b9e\u4f8b":8,abov:13,acl:[],add:[8,9,11],add_ascend:10,add_descend:10,add_uniqu:8,adduniqu:9,after:13,after_delet:13,after_sav:13,after_upd:13,all:13,allow:1,also:13,amount:[8,9],and_:10,anoth:6,anyfield:4,api:[],app_id:2,appid:2,applic:[2,13],arg:[2,13],argument:13,ascend:10,attr:[8,12,14],attribut:[8,13],base_url:13,baseop:9,basestr:[2,8],basic:13,before_delet:13,before_sav:13,behav:13,better:13,bodi:13,bool:[2,8],both:13,by_hook:2,callback:15,callfunct:13,calljob:13,came:13,can:13,change_region:2,check_error:2,child:11,class_nam:[8,13],classmethod:[5,8,10,11],clear:8,client:[],client_kei:2,code:3,com:13,combinedmultidict:13,consumpt:13,contain:[10,13],contained_in:10,contains_al:10,content:[8,13],content_typ:13,cooki:13,count:10,creat:8,create_with_url:5,create_without_data:[5,8],current:13,data:[5,13],decod:15,def:13,delet:2,descend:10,destroi:[5,8],destroy_al:10,dict:[8,10,13],dictionari:13,differ:13,direct_passthrough:13,disallow_object:15,distanc:[6,10],docstr:2,doe:13,does_not_exist:10,does_not_match_key_in_queri:10,does_not_match_queri:10,dump:[1,6,8,9,10,11,13],each:13,encod:[13,15],end:13,endpoint:13,endswith:10,environ:13,equal_to:10,error:[],etc:13,exampl:13,except:3,exist:10,extend:8,fals:[8,10,13,15],fetch:8,field:[],file:[5,13],file_:[],filestorag:13,filesystem:13,find:10,first:10,flag:2,flask:13,fmt:5,follow:13,form:13,from:[6,13],func:[2,13],gen_head:2,geo_point:[],geopoint:6,get:[2,8,10,12,13],get_acl:[5,8],get_dumpable_typ:15,get_master_princip:2,get_nam:12,get_public_read_access:1,get_public_write_access:1,get_read_access:1,get_rol:12,get_role_read_access:1,get_role_write_access:1,get_thumbnail_url:5,get_us:12,get_write_access:1,give:13,greater_than:10,greater_than_or_equal_to:10,hack:15,handl:13,handler_hook:2,have:13,header:[2,13],height:5,helloword:13,here:13,hook:13,html:13,http:13,id_:8,idea:13,ignore_cas:10,imagin:13,includ:10,incom:13,increment:[8,9],init:2,inject:2,input:13,input_stream:13,instead:13,is_curr:14,is_dirti:8,is_exist:8,is_new:8,item:8,job:13,json:13,keep:13,kei:[2,10,11,15],key_or_attr:8,kilomet:6,kilometers_to:6,know:13,known:13,kwarg:[2,13],latitud:6,less_than:10,less_than_or_equal_to:10,like:13,limit:10,list:10,listen:13,login:14,longitud:6,look:13,mark:13,master:2,master_kei:2,masterkei:2,match:[10,13],matched_key_in_queri:10,matches_queri:10,maxleap:[],maxleaperror:[3,10],mention:13,meta_data:5,metadata:5,method:[2,13],mile:6,miles_to:6,mime_typ:[],mimetyp:13,mind:13,modul:[],most:13,multi_lin:10,multidict:13,myapplic:13,name:[5,8,12,13],need_init:2,ninja:13,none:[1,2,5,8,10,11,13,14,15],northeast:10,not_contained_in:10,not_equal_to:10,numberfield:4,obj:[13,15],obj_or_obj:11,object:[1,2,4,5,6,8,9,10,11,12,13,14],object_:[],object_id:[5,10],objectid:[8,10],objectmeta:8,onc:13,onli:13,oper:[],option:13,or_:10,other:6,otherwis:13,owner_id:5,page:13,parent:11,parent_class:11,pars:[8,13],part:13,password:14,path:13,permissions_by_id:1,pleas:13,png:5,point:[6,10],populate_request:13,post:[2,13],princip:[8,10],provid:13,put:[2,13],python:[],qualiti:5,queri:[],query_class:10,query_kei:10,question:13,radian:6,radians_to:6,rais:10,regex:10,region:2,relat:[],relation_kei:11,rememb:13,remov:[8,9,11],repres:13,request:[13,15],respones:13,respons:[8,13,15],response_to_json:15,rest:2,reverse_queri:11,role:[],save:[5,8,13,14],scale_to_fit:5,script_root:13,seen:15,select:10,self:13,server:[],session_token:2,sessiontoken:14,set:[8,9,12,13],set_acl:[5,8],set_nam:12,set_public_read_access:1,set_public_write_access:1,set_read_access:1,set_role_read_access:1,set_role_write_access:1,set_write_access:1,shallow:13,sign_up:14,size:5,skip:10,southwest:10,specifi:13,standard:13,startswith:10,statu:13,status_cod:8,store:13,stream:13,string:13,stringfield:4,test:13,thi:[6,13],time:13,transmit:13,traverse_object:15,tupl:10,type:[8,13],type_:5,underli:13,unmodifi:13,unset:[8,9],upload:13,url:[5,13],url_root:13,user:[],user_id:1,usernam:14,userprincip:2,util:[],valid:[2,8,12],valu:[8,9,10,13,15],view:13,wai:13,werkzeug:13,which:13,width:5,within_geo_box:10,within_kilomet:10,within_mil:10,within_radian:10,work:13,would:13,wsgi:13,www:13,you:13,your:13},titles:["ML package","ML.acl module","ML.client module","ML.errors module","ML.fields module","ML.file_ module","ML.geo_point module","ML.mime_type module","ML.object_ module","ML.operation module","ML.query module","ML.relation module","ML.role module","ML.server module","ML.user module","ML.utils module","MaxLeap-Python-SDK API \u6587\u6863","ML"],titleterms:{"\u6587\u6863":16,acl:1,api:16,client:2,error:3,field:4,file_:5,geo_point:6,maxleap:16,mime_typ:7,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],object_:8,oper:9,packag:0,python:16,queri:10,relat:11,role:12,sdk:16,server:13,submodul:0,user:14,util:15}})