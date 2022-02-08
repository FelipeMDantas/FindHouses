import api from './api';

/*export const getHousesCall = async () => {
    try {
        const result = await api.get(
            '/properties/v2/list-for-rent?city=San%20Francisco&state_code=CA&limit=15&offset=0&sort=relevance',
    );
        console.log({ result });
        return result.data;
    } catch (error) {
        console.log({ error });
        return error;
    }
};

export const getHouseDetail = async property_id => {
    try {
        const result = await api.get(
            `/properties/v2/detail?property_id=${property_id}`,
    );
        console.log({ result });
        return result.data;
    } catch (error) {
        console.log({ error });
        return error;
    }
};*/

export const getHousesCall = () => {
    const result = {
            "meta": {
                "build": "3.23.180",
                "schema": "core.3",
                "tracking_params": {
                    "channel": "for_rent",
                    "siteSection": "for_rent",
                    "city": "San Francisco",
                    "county": "unknown",
                    "neighborhood": "unknown",
                    "searchCityState": "San Francisco, CA",
                    "state": "CA",
                    "zip": "unknown",
                    "srpPropertyStatus": "srp:for_rent",
                    "listingActivity": "unknown",
                    "propertyStatus": "for_rent",
                    "propertyType": "any",
                    "searchBathrooms": "any",
                    "searchBedrooms": "any",
                    "searchMaxPrice": "unknown",
                    "searchMinPrice": "unknown",
                    "searchRadius": "unknown",
                    "searchHouseSqft": "any",
                    "searchLotSqft": "any",
                    "searchResults": "15",
                    "sortResults": "freshest",
                    "searchCoordinates": "unknown",
                    "version": "1.0"
                },
                "tracking": "type|meta|data|resource_type|property_list|query|client_id|rdc_mobile_native,14.13.0.68|os|13.3.1|prop_status|for_rent|schema|core.3|limit|offset|city|San+Francisco|state_code|CA|sort|freshest|count|total^F|0|F|XT^^$0|1|2|$3|4|5|$6|7|8|9|A|B|C|D|E|O|F|P|G|H|I|J|K|L]|A|B|M|Q|N|R]]",
                "returned_rows": 15,
                "matching_rows": 1217
            },
            "properties": [
                {
                    "property_id": "R9152364629",
                    "listing_id": "2932377047",
                    "prop_type": "apartment",
                    "list_date": "2021-10-28T14:12:41.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 1913,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.787218,
                        "line": "775 Post St",
                        "postal_code": "94109",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Lower Nob Hill",
                        "neighborhoods": [
                            {
                                "id": "bcab1649-f65c-5478-b895-a00d0b4b9f25",
                                "level": "neighborhood",
                                "name": "Lower Nob Hill"
                            },
                            {
                                "id": "0d5f9cce-05cf-5e4c-8331-3b5777305b53",
                                "level": "macro_neighborhood",
                                "name": "Northeast San Francisco"
                            }
                        ],
                        "lon": -122.414587
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": false,
                        "has_matterport": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/775-Post-St_San-Francisco_CA_94109_M91523-64629",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/775-Post-St_San-Francisco_CA_94109_M91523-64629",
                    "community": {
                        "baths_max": 1,
                        "baths_min": 1,
                        "beds_max": 3,
                        "beds_min": 0,
                        "id": 2450575,
                        "name": "Warrington Apartments",
                        "price_max": 3950,
                        "price_min": 1600,
                        "source_id": "14znvw5",
                        "sqft_max": 1400,
                        "sqft_min": 500
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 1,
                    "list_tracking": "type|property|data|prop_id|9152364629|list_id|2932377047|comm_id|2450575|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|1|0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 40,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2970032694s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4038894128s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3735425443s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2148210049s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1672988142s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3362565081s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3332859584s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f683312861s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2941598587s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f730029761s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4271681248s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4087378732s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f798256854s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4167801081s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4163665312s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f908166114s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3560114584s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f627509955s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f175682792s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1092314435s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3215362604s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f503736190s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3458372668s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3555327280s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3936192254s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f176163578s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1206937021s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2353704581s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f858351241s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3350410295s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3904291077s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f942726175s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f687875871s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f325382616s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f348487383s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f392284984s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1466513212s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2822006638s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3760797903s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f488593214s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R9854441797",
                    "listing_id": "2923399554",
                    "prop_type": "apartment",
                    "virtual_tour": {
                        "count": 1,
                        "href": "https://images1.apartments.com/i2/6_YPuxLVwxmiQsEE-DVsJbN4HLipojQokdUT1CFOYD4/111/image.jpg"
                    },
                    "list_date": "2021-11-03T14:13:28.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 1950,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "line": "70-80 Terra Vista Ave",
                        "postal_code": "94115",
                        "state_code": "CA",
                        "state": "California",
                        "lat": 37.786016,
                        "is_approximate": true,
                        "time_zone": "America/Los_Angeles",
                        "lon": -122.437382
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/70-80-Terra-Vista-Ave_San-Francisco_CA_94115_M98544-41797",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/70-80-Terra-Vista-Ave_San-Francisco_CA_94115_M98544-41797",
                    "community": {
                        "baths_max": 1,
                        "baths_min": 1,
                        "beds_max": 1,
                        "beds_min": 1,
                        "id": 2331473,
                        "name": "Terra Vista Apartments",
                        "price_max": 2395,
                        "price_min": 2395,
                        "source_id": "8tryjk3",
                        "sqft_max": 700,
                        "sqft_min": 700
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 2,
                    "list_tracking": "type|property|data|prop_id|9854441797|list_id|2923399554|comm_id|2331473|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|2|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 40,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1048343724s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1788366772s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f172482229s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f4047438402s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3465784420s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1712909417s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1761371579s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f512777052s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2225770658s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2279961525s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f563933685s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2969086358s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f241386632s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f494010373s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1293703467s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f4265000501s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2308042400s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1000053433s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f822820633s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3453335445s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1222702874s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f1192055225s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f762196929s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2161421805s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3067136355s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f4168509563s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3200406219s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2632322950s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f683404765s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f347339740s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2736442771s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3405478904s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3108474697s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2389232399s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2615316252s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f2238074136s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3831829406s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f279054340s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3669344984s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/de8bb188b93bd21dd0776fd54e628567c-f3553901593s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R9373737203",
                    "listing_id": "2782141473",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 1950,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "line": "1530-1580 5th Ave",
                        "postal_code": "94122",
                        "state_code": "CA",
                        "state": "California",
                        "lat": 37.7591,
                        "is_approximate": true,
                        "time_zone": "America/Los_Angeles",
                        "lon": -122.485637
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true,
                        "has_matterport": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1530-1580-5th-Ave_San-Francisco_CA_94122_M93737-37203",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/1530-1580-5th-Ave_San-Francisco_CA_94122_M93737-37203",
                    "community": {
                        "baths_max": 1,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 1,
                        "contact_number": "(408) 703-5004",
                        "id": 2093492,
                        "name": "Kirkham Heights Apartments",
                        "price_max": 3100,
                        "price_min": 2650,
                        "source_id": "9shmql5",
                        "sqft_max": 781,
                        "sqft_min": 633
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 3,
                    "list_tracking": "type|property|data|prop_id|9373737203|list_id|2782141473|comm_id|2093492|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|3|0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 40,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f4171241471s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1516108712s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f234015050s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1009722899s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2881547636s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1162572881s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f483205517s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f4027670126s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f4112204887s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f241490767s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f86077576s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f3140821995s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2186905059s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2088731621s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1012933521s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2653475508s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1959978198s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f4175745713s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2906190053s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2911239828s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f3262059178s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2934461026s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f551226841s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f331106611s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f3365770649s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f3584550823s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f3889298113s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1435896550s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2253698655s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1799318532s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1495882754s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1678448910s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1856825833s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2112265298s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f638637923s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2093916829s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2291625392s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f3191783550s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f2677535779s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/357c1e3e9ef8b8f4f379983c8cc6f9abc-f1296769983s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R1373751513",
                    "listing_id": "592665884",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2009,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.7115,
                        "line": "301 Executive Park Blvd",
                        "postal_code": "94134",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Candlestick Point State Recreation Area",
                        "neighborhoods": [
                            {
                                "id": "aa21f539-9469-51ed-8144-eb040b117f8d",
                                "level": "neighborhood",
                                "name": "Candlestick Point State Recreation Area"
                            },
                            {
                                "id": "4400ee11-63cc-5c7b-8eb0-32f851239672",
                                "level": "macro_neighborhood",
                                "name": "Southeast San Francisco"
                            }
                        ],
                        "lon": -122.391802
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true,
                        "has_matterport": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/301-Executive-Park-Blvd_San-Francisco_CA_94134_M13737-51513",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/301-Executive-Park-Blvd_San-Francisco_CA_94134_M13737-51513",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 0,
                        "contact_number": "(844) 819-2178",
                        "id": 1312644,
                        "name": "Ashton San Francisco Apartments",
                        "price_max": 4381,
                        "price_min": 2715,
                        "source_id": "0pvmdb0",
                        "sqft_max": 1703,
                        "sqft_min": 768
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 4,
                    "list_tracking": "type|property|data|prop_id|1373751513|list_id|592665884|comm_id|1312644|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|4|0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 26,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f356070110s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f1841469746s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f4156006200s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f3569898940s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f3187995266s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f3402521565s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f2190972211s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f2828413048s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f3066105059s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f378743356s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f3554199501s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f2395233633s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f901293186s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f2709152972s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f1750583711s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f1592362338s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f2916691385s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f1972905327s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f637939513s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f2432052324s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f1722056546s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f1506656599s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f2857680343s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f116021341s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f99174782s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9b04b8a800775b441e524d30919e1aefc-f505149840s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R2670202898",
                    "listing_id": "592664328",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2001,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.786761,
                        "line": "680 Mission St",
                        "postal_code": "94105",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Yerba Buena",
                        "neighborhoods": [
                            {
                                "id": "62bc8078-e868-5ace-a6aa-cb8404d97564",
                                "level": "sub_neighborhood",
                                "name": "Yerba Buena"
                            },
                            {
                                "id": "2223cd1d-e4a2-50cc-ae87-5aa4a305a992",
                                "level": "neighborhood",
                                "name": "South Beach"
                            },
                            {
                                "id": "7321c5a0-c78f-5536-99a2-ef8e5d4a50ce",
                                "level": "macro_neighborhood",
                                "name": "South of Market"
                            }
                        ],
                        "lon": -122.401975
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true,
                        "has_matterport": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/680-Mission-St_San-Francisco_CA_94105_M26702-02898",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/680-Mission-St_San-Francisco_CA_94105_M26702-02898",
                    "community": {
                        "baths_max": 1,
                        "baths_min": 1,
                        "beds_max": 1,
                        "beds_min": 1,
                        "contact_number": "(844) 667-7511",
                        "id": 1310750,
                        "name": "The Paramount",
                        "price_max": 4995,
                        "price_min": 4200,
                        "source_id": "6gy8r5r",
                        "sqft_max": null,
                        "sqft_min": null,
                        "sqft_hint": "CALL"
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 5,
                    "list_tracking": "type|property|data|prop_id|2670202898|list_id|592664328|comm_id|1310750|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|5|0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 55,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2156638083s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2890812570s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3145699110s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f46592069s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1290184697s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f4045308295s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3037336116s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3060727990s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f891001746s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1658721531s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f964783296s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f987271291s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1073515599s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f206491038s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1951942186s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3515803082s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f432970756s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f23794908s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1131558971s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3785504274s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2204853588s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f846992809s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1330204889s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f4081891793s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1804906453s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f176907834s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3524216323s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f942793767s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3562922059s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2942090096s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1551055924s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2876093406s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1022547581s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2757164169s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f98653534s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2125441934s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f475074502s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3993329871s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1182652248s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3457159205s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3706724371s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3596784341s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f505969341s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3776454164s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3639654996s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f1732360925s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2222650895s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2007209444s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f812072004s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f2171661152s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f4006669155s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3711518357s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f791611506s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f979223060s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/8701a049e24eddb5a091857db1ccddb6c-f3757208666s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R1648431255",
                    "listing_id": "598428324",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2010,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.78893,
                        "line": "1801 Wedemeyer St",
                        "postal_code": "94129",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Presidio National Park",
                        "neighborhoods": [
                            {
                                "id": "dcccc93d-1cbf-5356-b6a0-ca6bda85d1a6",
                                "level": "neighborhood",
                                "name": "Presidio National Park"
                            },
                            {
                                "id": "9aba2392-d304-5519-9a60-29614f7d70a2",
                                "level": "macro_neighborhood",
                                "name": "Northwest San Francisco"
                            }
                        ],
                        "lon": -122.47462
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": false,
                        "allows_dogs": false
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1801-Wedemeyer-St_San-Francisco_CA_94129_M16484-31255",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/1801-Wedemeyer-St_San-Francisco_CA_94129_M16484-31255",
                    "community": {
                        "baths_max": 3,
                        "baths_min": 1,
                        "beds_max": 3,
                        "beds_min": 1,
                        "contact_number": "(844) 586-0274",
                        "id": 1442839,
                        "name": "The Presidio Landmark",
                        "price_max": 6445,
                        "price_min": 3115,
                        "source_id": "2ck28l8",
                        "sqft_max": 1700,
                        "sqft_min": 400
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 6,
                    "list_tracking": "type|property|data|prop_id|1648431255|list_id|598428324|comm_id|1442839|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|6|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 45,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3626019667s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1843574244s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1362638407s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f50135594s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1463386944s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f724354007s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3657933392s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f516054671s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3556127611s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2044618332s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1890438196s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1187784264s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3280675804s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2622978230s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1942075462s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3717657155s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3962332125s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2369525716s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2644863527s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3166861107s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2881075067s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f4290765660s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2875809923s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1404511469s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1786347852s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1287606874s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3620679098s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1919477561s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2222928804s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2338616314s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f494245542s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2440873166s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3304993680s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2151267197s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2802327448s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3893135854s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f355127902s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3864253760s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f1053045554s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2086272746s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f3207911996s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2614659320s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f856321966s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f4257408777s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/f6b0b69efbb08fc9ea85392a00ce96adc-f2394788287s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R1446786432",
                    "listing_id": "2709741740",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2020,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.763236,
                        "line": "1601 Mariposa St",
                        "postal_code": "94107",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Potrero Hill",
                        "neighborhoods": [
                            {
                                "id": "40c8f3a2-d116-5335-905f-f6ebf37f27e8",
                                "level": "neighborhood",
                                "name": "Potrero Hill"
                            },
                            {
                                "id": "4400ee11-63cc-5c7b-8eb0-32f851239672",
                                "level": "macro_neighborhood",
                                "name": "Southeast San Francisco"
                            }
                        ],
                        "lon": -122.399761
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1601-Mariposa-St_San-Francisco_CA_94107_M14467-86432",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/1601-Mariposa-St_San-Francisco_CA_94107_M14467-86432",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 0,
                        "contact_number": "(844) 834-9964",
                        "id": 2075659,
                        "name": "Mason on Mariposa",
                        "price_max": 6085,
                        "price_min": 2950,
                        "source_id": "b1rlv7c",
                        "sqft_max": null,
                        "sqft_min": null,
                        "sqft_hint": "CALL"
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 7,
                    "list_tracking": "type|property|data|prop_id|1446786432|list_id|2709741740|comm_id|2075659|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|7|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 11,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f2372719035s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f1045118181s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f902960478s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f980008597s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f3146322324s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f2542947323s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f1897463063s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f2266107282s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f3888517270s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f1622343209s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/e1e859713fb8ab523803fe5c9c3ccd69c-f360394856s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R9333245547",
                    "listing_id": "2914407015",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2020,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.774186,
                        "line": "1550 Mission St",
                        "postal_code": "94103",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Western South of Market",
                        "neighborhoods": [
                            {
                                "id": "3c26f6e4-054d-59c6-b521-5ff8561d5f02",
                                "level": "neighborhood",
                                "name": "Western South of Market"
                            },
                            {
                                "id": "7321c5a0-c78f-5536-99a2-ef8e5d4a50ce",
                                "level": "macro_neighborhood",
                                "name": "South of Market"
                            }
                        ],
                        "lon": -122.418126
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1550-Mission-St_San-Francisco_CA_94103_M93332-45547",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/1550-Mission-St_San-Francisco_CA_94103_M93332-45547",
                    "community": {
                        "baths_max": 3,
                        "baths_min": 1,
                        "beds_max": 3,
                        "beds_min": 0,
                        "contact_number": "(707) 880-3261",
                        "id": 2174037,
                        "name": "Fifteen Fifty",
                        "price_max": 19000,
                        "price_min": 3550,
                        "source_id": "52sddxp",
                        "sqft_max": null,
                        "sqft_min": null,
                        "sqft_hint": "CALL"
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 8,
                    "list_tracking": "type|property|data|prop_id|9333245547|list_id|2914407015|comm_id|2174037|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|8|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 11,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f1752810610s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f878724815s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f2093423921s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f1746107124s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f1782985717s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f1406732032s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f2991341706s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f2060928082s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f3774058473s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f4283605381s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/14897ab0253cc103f6c77c7896326454c-f719002082s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R9719074307",
                    "listing_id": "2321446546",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2019,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.787661,
                        "line": "450 Folsom St",
                        "postal_code": "94105",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Rincon Hill",
                        "neighborhoods": [
                            {
                                "id": "4ebcf772-0692-5847-99c9-88cd348caccc",
                                "level": "sub_neighborhood",
                                "name": "Rincon Hill"
                            },
                            {
                                "id": "2223cd1d-e4a2-50cc-ae87-5aa4a305a992",
                                "level": "neighborhood",
                                "name": "South Beach"
                            },
                            {
                                "id": "7321c5a0-c78f-5536-99a2-ef8e5d4a50ce",
                                "level": "macro_neighborhood",
                                "name": "South of Market"
                            }
                        ],
                        "lon": -122.394275
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/450-Folsom-St_San-Francisco_CA_94105_M97190-74307",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/450-Folsom-St_San-Francisco_CA_94105_M97190-74307",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 0,
                        "contact_number": "(628) 239-2876",
                        "id": 1993825,
                        "name": "Avery 450",
                        "price_max": 6395,
                        "price_min": 3900,
                        "source_id": "d1150rk",
                        "sqft_max": null,
                        "sqft_min": null,
                        "sqft_hint": "CALL"
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 9,
                    "list_tracking": "type|property|data|prop_id|9719074307|list_id|2321446546|comm_id|1993825|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|9|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 1,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/adc72323f6492c389776d7771c3b6803c-f4133916065s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R9863983789",
                    "listing_id": "2925563033",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2021,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.779072,
                        "line": "1177 Market St",
                        "postal_code": "94103",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Western South of Market",
                        "neighborhoods": [
                            {
                                "id": "3c26f6e4-054d-59c6-b521-5ff8561d5f02",
                                "level": "neighborhood",
                                "name": "Western South of Market"
                            },
                            {
                                "id": "7321c5a0-c78f-5536-99a2-ef8e5d4a50ce",
                                "level": "macro_neighborhood",
                                "name": "South of Market"
                            }
                        ],
                        "lon": -122.41385
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1177-Market-St_San-Francisco_CA_94103_M98639-83789",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/1177-Market-St_San-Francisco_CA_94103_M98639-83789",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 1,
                        "contact_number": "(844) 224-9263",
                        "id": 2373687,
                        "name": "1177 Market at Trinity Place",
                        "price_max": 5599,
                        "price_min": 2845,
                        "source_id": "cjkjj6g",
                        "sqft_max": 1160,
                        "sqft_min": 435
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 10,
                    "list_tracking": "type|property|data|prop_id|9863983789|list_id|2925563033|comm_id|2373687|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|A|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 123,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3764673208s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2413423786s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f475275192s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2137823576s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1929204969s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f430267489s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2332484605s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f656598077s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3258959086s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3953468019s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f877668979s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1560719160s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1305641414s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1602632213s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3956359129s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f4083385934s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f702725580s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1810888977s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f4124184046s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f636116692s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f138037982s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1151001428s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2234316872s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f701066519s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1399106129s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f850862874s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1866983033s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3172207036s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f261445855s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1995750875s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2403016429s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3243333725s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1177739957s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3280923471s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2941164233s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1803874283s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3209043997s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3364092152s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f229431505s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3599533055s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f401679465s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f191839274s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f515580118s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2493585625s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f4216614626s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3726760982s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3035466912s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3932910896s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3350018995s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f131473793s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f77571920s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3945070301s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f76317223s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3665075357s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1195443393s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1039367937s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1637604378s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1854143942s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3061061194s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2589875906s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2056501334s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f751361412s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1871868991s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f121090326s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f4285174393s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1236643513s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f4234281312s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2832819367s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1151978808s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f536736021s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1954847754s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3799786573s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3654867551s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f4134488321s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3067900314s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2884130416s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f403219510s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1652229576s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2716291316s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2254092111s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3826587542s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f996468910s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2962989441s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2929779347s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f840685674s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3752286001s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3766221802s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f969822836s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2818853370s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f810935907s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f298090586s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3504969444s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3661589695s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f153293803s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3951944092s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2323334779s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1348862498s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1279581811s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f568612024s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f964058356s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3032701974s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2138506283s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3140253897s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2330303782s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f4130193993s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3729700261s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f375701347s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2118657443s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f446384893s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3846591970s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3327403299s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3104665414s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1471971119s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f2668076604s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3719506945s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3216932762s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f165227733s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f684941393s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3713281666s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3290198174s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f3028288040s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f1406298910s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/32cf4b158cd289193dc536be1ac23c9bc-f392495158s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R1360032052",
                    "listing_id": "597370944",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2001,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.78001,
                        "line": "1045 Mission St",
                        "postal_code": "94103",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "South Beach",
                        "neighborhoods": [
                            {
                                "id": "2223cd1d-e4a2-50cc-ae87-5aa4a305a992",
                                "level": "neighborhood",
                                "name": "South Beach"
                            },
                            {
                                "id": "7321c5a0-c78f-5536-99a2-ef8e5d4a50ce",
                                "level": "macro_neighborhood",
                                "name": "South of Market"
                            }
                        ],
                        "lon": -122.40962
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": false,
                        "allows_dogs": false,
                        "has_matterport": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1045-Mission-St_San-Francisco_CA_94103_M13600-32052",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/1045-Mission-St_San-Francisco_CA_94103_M13600-32052",
                    "community": {
                        "baths_max": 1,
                        "baths_min": 1,
                        "beds_max": 1,
                        "beds_min": 0,
                        "contact_number": "(510) 296-0503",
                        "id": 1417344,
                        "name": "Soma Residences",
                        "price_max": 2932,
                        "price_min": 1779,
                        "source_id": "f96bywv",
                        "sqft_max": 835,
                        "sqft_min": 275
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 11,
                    "list_tracking": "type|property|data|prop_id|1360032052|list_id|597370944|comm_id|1417344|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|B|0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 94,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1551887939s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2532378003s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3015818071s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2917680220s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f420848530s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3873562743s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f907479321s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3139093921s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2932180146s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2105723051s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2393726806s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1785935941s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f881765625s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1323448905s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1421051083s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f438003770s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1481817736s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1328950371s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3215575692s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1840380161s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4220665371s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1697767766s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1958972830s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1673600103s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1533444491s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f729221451s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f177002363s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f198624040s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1160857473s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4055617260s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f634650680s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2545082s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f489687750s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f265247948s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1455031567s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f978842857s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1373223598s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f79436793s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f324016351s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1472951658s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2310450744s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2775319179s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1399726269s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1838113954s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3770671876s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3762689886s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3259956906s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2075544916s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3509924521s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2311015037s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2198305129s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2959537899s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f75175141s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2393426396s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2860106070s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2320047501s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2800845243s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2494345555s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1916439149s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f210546383s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4080667119s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f853724538s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f611575299s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1019927529s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2581994428s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2459893680s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1512587840s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4275699272s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1995111482s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3945725643s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4059047623s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f740308069s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1881245904s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3964371728s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3514266667s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f372694664s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1604190229s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f959791963s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4113746161s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1292295370s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4271126478s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3250216168s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f3613644759s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2022465045s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f816915573s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f569489818s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1911604388s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f2063036130s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4251423197s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f821592171s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f1764407113s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f943482428s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f4048139679s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/9fb7f8f917142f6dd4970b426c307171c-f682375444s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R9197524523",
                    "listing_id": "2936644092",
                    "prop_type": "apartment",
                    "list_date": "2021-11-11T08:13:31.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2021,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.781801,
                        "line": "434 Minna St",
                        "postal_code": "94103",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "South Beach",
                        "neighborhoods": [
                            {
                                "id": "2223cd1d-e4a2-50cc-ae87-5aa4a305a992",
                                "level": "neighborhood",
                                "name": "South Beach"
                            },
                            {
                                "id": "7321c5a0-c78f-5536-99a2-ef8e5d4a50ce",
                                "level": "macro_neighborhood",
                                "name": "South of Market"
                            }
                        ],
                        "lon": -122.407045
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/434-Minna-St_San-Francisco_CA_94103_M91975-24523",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/434-Minna-St_San-Francisco_CA_94103_M91975-24523",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 0,
                        "contact_number": "(916) 627-2840",
                        "id": 3188831,
                        "name": "The George",
                        "price_max": 5800,
                        "price_min": 2765,
                        "source_id": "vcp0s5e",
                        "sqft_max": 1052,
                        "sqft_min": 387
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 12,
                    "list_tracking": "type|property|data|prop_id|9197524523|list_id|2936644092|comm_id|3188831|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|C|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 76,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f880009291s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2266162276s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4152937540s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2105084089s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3573908407s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3017700999s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1472536398s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2982750079s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4291104086s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f105394116s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1797919373s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3359574769s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2316940713s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1978576008s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4168936091s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f90891935s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1731114352s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f790950999s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f627538801s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1435743384s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3276396526s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1585338354s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f312974620s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4110179383s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f991827460s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3978127909s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3400769653s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f105962791s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f803227584s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2828183184s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3958314342s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2926105262s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3490976326s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3227027657s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2669168902s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2517274696s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2441526030s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1999507518s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3503659729s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3829990948s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f27626598s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4291871139s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f394859157s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1669178098s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2300974863s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f423868387s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f733612644s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3411517766s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3079622249s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2993321371s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1472424541s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3167779790s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4178924329s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1978999191s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3087742546s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3191087780s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4145691147s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1363298953s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1582312144s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f464136509s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3698246537s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1969175059s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f205449114s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2435318204s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f753082021s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1581546813s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f3980043991s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1714227821s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2187676927s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2861764746s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1032010950s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f330830561s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f2197541372s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f1161943453s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f4196096970s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/34d39a5b643d469bba1115936dac5f9cc-f947143968s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R1375154718",
                    "listing_id": "592661312",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 2014,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.77666,
                        "line": "100 Van Ness Ave",
                        "postal_code": "94102",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Civic Center",
                        "neighborhoods": [
                            {
                                "id": "77ecf874-0938-58b0-890d-d60610e64420",
                                "level": "neighborhood",
                                "name": "Civic Center"
                            },
                            {
                                "id": "0d5f9cce-05cf-5e4c-8331-3b5777305b53",
                                "level": "macro_neighborhood",
                                "name": "Northeast San Francisco"
                            }
                        ],
                        "lon": -122.41928
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true,
                        "has_matterport": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/100-Van-Ness-Ave_San-Francisco_CA_94102_M13751-54718",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/100-Van-Ness-Ave_San-Francisco_CA_94102_M13751-54718",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 0,
                        "contact_number": "(844) 665-4518",
                        "id": 1307263,
                        "name": "100 Van Ness",
                        "price_max": 7075,
                        "price_min": 2750,
                        "source_id": "yv6dh0t",
                        "sqft_max": 1437,
                        "sqft_min": 439
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 13,
                    "list_tracking": "type|property|data|prop_id|1375154718|list_id|592661312|comm_id|1307263|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|D|0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 74,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1318982922s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1760276086s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2296043697s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1106254781s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f521533222s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1304878155s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2524012571s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1293814040s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3367557462s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f754657958s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3027485572s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1101346386s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1331915258s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2866257122s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3196055426s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3618652460s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2122432291s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1090059309s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f500617810s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1566300352s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2803129156s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1760963652s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2747564554s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1065087361s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f535745313s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f631280470s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f4266343464s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2773831816s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3789952677s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f249648657s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1475536003s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2535162919s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3002581526s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f325894642s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2913763400s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3294915539s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3907350939s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3349463579s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f4226587219s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f582145134s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3878486673s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f105857997s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2470198154s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1838416571s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1908847574s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1542492401s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f4032589855s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2170496294s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f776329262s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2047355561s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1009472232s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f902596819s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1366819064s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2596159763s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2676855073s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3391929368s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1716416926s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f512094471s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3936567854s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f324935486s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2964309422s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2626931748s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f1333214448s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2990771858s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3463144587s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f702499122s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2360628280s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3663233274s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f2446025488s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f4157752025s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f510012942s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3342676530s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3336651030s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/337d50c65a2190ad752f94408850e079c-f3062269732s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R9099563219",
                    "listing_id": "2913763350",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T08:15:59.000Z",
                    "year_built": 2020,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.781799,
                        "line": "1066 Market St",
                        "postal_code": "94102",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "Tenderloin",
                        "neighborhoods": [
                            {
                                "id": "bb128c87-3d85-52c2-b96c-70a04bd2f3d6",
                                "level": "neighborhood",
                                "name": "Tenderloin"
                            },
                            {
                                "id": "0d5f9cce-05cf-5e4c-8331-3b5777305b53",
                                "level": "macro_neighborhood",
                                "name": "Northeast San Francisco"
                            }
                        ],
                        "lon": -122.411741
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1066-Market-St_San-Francisco_CA_94102_M90995-63219",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/1066-Market-St_San-Francisco_CA_94102_M90995-63219",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 0,
                        "contact_number": "(707) 788-7463",
                        "id": 2162097,
                        "name": "50 Jones",
                        "price_max": 3744,
                        "price_min": 1970,
                        "source_id": "79rtqtx",
                        "sqft_max": 1051,
                        "sqft_min": 416
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 14,
                    "list_tracking": "type|property|data|prop_id|9099563219|list_id|2913763350|comm_id|2162097|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|E|0|0|3K2|E8|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 59,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f999859467s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4058585591s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f841328815s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2536447347s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1183691907s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1596665865s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2089195554s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1754045603s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2761592092s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2302809635s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2064483477s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3277767891s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1541293117s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2492719235s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f603174837s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2306367623s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f962667363s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4088789532s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2710884253s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1161946625s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1996562983s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f596519275s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3565928419s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3091243272s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2384794948s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2991538975s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1665895745s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3270964869s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2957068457s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1550944008s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4002243485s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1153713585s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3367067618s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1875229654s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f185210010s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4120642854s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1530482127s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3554281568s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2984093789s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f420325853s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2160314467s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1082545794s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2511703822s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1140356766s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4038346844s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3609255600s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f209090451s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f129318665s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4292194078s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4098593893s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f604102673s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f2218872263s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3613087243s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4284686466s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f1266711192s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f4108380286s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f327275919s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f309750399s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/288cbc34fc495fbe8fcf6f05aa2bc239c-f3098099436s.jpg"
                        }
                    ]
                },
                {
                    "property_id": "R1222172246",
                    "listing_id": "593702696",
                    "prop_type": "apartment",
                    "list_date": "2021-09-16T23:39:33.000Z",
                    "last_update": "2022-01-31T20:16:39.000Z",
                    "year_built": 1988,
                    "listing_status": "active",
                    "beds": 0,
                    "branding": {
                        "state_license": null
                    },
                    "prop_status": "for_rent",
                    "address": {
                        "city": "San Francisco",
                        "country": "USA",
                        "county": "San Francisco",
                        "county_needed_for_uniq": false,
                        "lat": 37.78513,
                        "line": "3 Bayside Village Pl",
                        "postal_code": "94107",
                        "state_code": "CA",
                        "state": "California",
                        "time_zone": "America/Los_Angeles",
                        "neighborhood_name": "South Beach",
                        "neighborhoods": [
                            {
                                "id": "2223cd1d-e4a2-50cc-ae87-5aa4a305a992",
                                "level": "neighborhood",
                                "name": "South Beach"
                            },
                            {
                                "id": "7321c5a0-c78f-5536-99a2-ef8e5d4a50ce",
                                "level": "macro_neighborhood",
                                "name": "South of Market"
                            }
                        ],
                        "lon": -122.3899
                    },
                    "client_display_flags": {
                        "presentation_status": "for_rent",
                        "is_showcase": true,
                        "lead_form_phone_required": true,
                        "price_change": 0,
                        "has_specials": false,
                        "is_mls_rental": false,
                        "is_rental_community": true,
                        "is_rental_unit": false,
                        "is_co_star": true,
                        "is_apartmentlist": false,
                        "suppress_map_pin": false,
                        "suppress_phone_call_lead_event": true,
                        "price_reduced": false,
                        "allows_cats": true,
                        "allows_dogs": true,
                        "has_matterport": true
                    },
                    "products": [
                        "enhanced",
                        "management_other_listings",
                        "management_company_logo",
                        "management_company_name",
                        "management_company_website",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL",
                        "_COMMUNITY_RENTAL"
                    ],
                    "agents": [
                        {
                            "primary": true
                        }
                    ],
                    "lead_forms": {
                        "form": {
                            "name": {
                                "required": true,
                                "minimum_character_count": 1
                            },
                            "email": {
                                "required": true,
                                "minimum_character_count": 5
                            },
                            "move_in_date": {
                                "required": true,
                                "default_date": "2022-03-01T12:00:00Z",
                                "minimum_days_from_today": 1,
                                "maximum_days_from_today": 180
                            },
                            "phone": {
                                "required": true,
                                "minimum_character_count": 10,
                                "maximum_character_count": 11
                            },
                            "message": {
                                "required": false,
                                "minimum_character_count": 0
                            },
                            "show": false
                        },
                        "show_agent": false,
                        "show_broker": false,
                        "show_provider": false,
                        "show_management": false
                    },
                    "lot_size": {
                        "size": 0,
                        "units": "sqft"
                    },
                    "building_size": {
                        "units": "sqft"
                    },
                    "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/3-Bayside-Village-Pl_San-Francisco_CA_94107_M12221-72246",
                    "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/3-Bayside-Village-Pl_San-Francisco_CA_94107_M12221-72246",
                    "community": {
                        "baths_max": 2,
                        "baths_min": 1,
                        "beds_max": 2,
                        "beds_min": 0,
                        "contact_number": "(844) 688-0782",
                        "id": 1348350,
                        "name": "Bayside Village",
                        "price_max": 4535,
                        "price_min": 2530,
                        "source_id": "1rerqb5",
                        "sqft_max": 1192,
                        "sqft_min": 460
                    },
                    "data_source_name": "co-star",
                    "source": "community",
                    "page_no": 1,
                    "rank": 15,
                    "list_tracking": "type|property|data|prop_id|1222172246|list_id|593702696|comm_id|1348350|page|rank|list_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^1|F|0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|J|A|K|B|$C|L|D|M]|E|F|G|N|H|O|I|P]]",
                    "photo_count": 32,
                    "photos": [
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2851826431s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f1444797968s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2135618656s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f1629185909s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f878481878s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3360080714s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3785722158s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f4014076089s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3694483292s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2299060757s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3843333226s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2157275055s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f537883622s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f4194237598s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3340517333s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2515688168s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2358857712s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2505732488s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3999892023s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f4076457175s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2836232871s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3560323704s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f1384354748s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f23306806s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f924001032s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f1329491328s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f1868734196s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2709041020s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f3942447876s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f40815835s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2982291456s.jpg"
                        },
                        {
                            "href": "https://ar.rdcpix.com/bf45bd1f9599dcb0a1ae62e81906dd7bc-f2216463961s.jpg"
                        }
                    ]
                }
            ]
        }
    
    return result;
};

export const getHouseDetail = property_id => {
    const result = {
        "meta": {
            "build": "3.23.180",
            "schema": "core.3",
            "tracking": "type|meta|data|resource_type|property_detail|query|client_id|rdc_mobile_native,14.13.0.68|schema|core.3|tag_version|v2^^^$0|1|2|$3|4|5|$6|7|8|9|A|B]]]",
            "returned_rows": 1,
            "matching_rows": 1,
            "tracking_params": {
                "ldpPropertyStatus": "ldp:for_rent",
                "pageType": "ldp",
                "leadDelivery": "showcase",
                "leadEnhancements": "classic",
                "listingActivity": "active",
                "productType": "showcase",
                "propertyStatus": "for_rent",
                "listingId": "2932377047",
                "rentalDataSource": "costar",
                "communityId": "2450575",
                "mprId": "9152364629",
                "listingMls": "unknown",
                "planId": "unknown",
                "subId": "unknown",
                "city": "San Francisco",
                "neighborhood": "Lower Nob Hill",
                "state": "CA",
                "zip": "94109",
                "listingBaths": "1",
                "listingBeds": "3",
                "listingSqFt": "1200",
                "listingEnhancements": "unknown",
                "listingPrice": "",
                "photoCount": "40",
                "propertyType": "ldp:apartment",
                "version": "1.0"
            }
        },
        "properties": [
            {
                "property_id": "R9152364629",
                "listing_id": "2932377047",
                "prop_type": "apartment",
                "list_date": "2021-10-28T14:12:41.000Z",
                "last_update": "2022-02-05T20:17:06.000Z",
                "year_built": 1913,
                "listing_status": "active",
                "beds": 0,
                "description": "e Warrington is located in the Historic Lower Nob Hill neighborhood. Located at 775 Post Street, The Warrington is a beautifully maintained corner building built in 1913 and has an elegant lobby, community courtyard and is convenient to downtown, taxis and bus lines.This apartment building is in the Lower Nob Hill neighborhood in San Francisco. Nearby parks include O'Farrell-Larkin Mini-Park, Boeddeker Park and Parklet. 775 Post Street has a Walk Score of 99 out of 100. This location is a Walker?s Paradise so daily errands do not require a car. 775 Post Street is in the Lower Nob Hill neighborhood. Lower Nob Hill is the 3rd most walkable neighborhood in San Francisco. Commute to Downtown San Francisco car-3 min bus-17 min bike-6 min walk-23 min",
                "branding": {
                    "state_license": null
                },
                "prop_status": "for_rent",
                "matterports": [
                    {
                        "id": null,
                        "url": "https://my.matterport.com/show/?m=dwKPf3ezS6d",
                        "thumb_url": ""
                    }
                ],
                "address": {
                    "city": "San Francisco",
                    "country": "USA",
                    "county": "San Francisco",
                    "county_needed_for_uniq": false,
                    "lat": 37.787218,
                    "line": "775 Post St",
                    "postal_code": "94109",
                    "state_code": "CA",
                    "state": "California",
                    "time_zone": "America/Los_Angeles",
                    "neighborhood_name": "Lower Nob Hill",
                    "neighborhoods": [
                        {
                            "id": "bcab1649-f65c-5478-b895-a00d0b4b9f25",
                            "level": "neighborhood",
                            "name": "Lower Nob Hill"
                        },
                        {
                            "id": "0d5f9cce-05cf-5e4c-8331-3b5777305b53",
                            "level": "macro_neighborhood",
                            "name": "Northeast San Francisco"
                        }
                    ],
                    "lon": -122.414587
                },
                "features": [
                    {
                        "category": "Community Features",
                        "text": [
                            "Cable Ready",
                            "Carpet",
                            "Cats Allowed",
                            "Composting",
                            "Controlled Access",
                            "Courtyard",
                            "Crown Molding",
                            "Dishwasher",
                            "Disposal Chutes",
                            "Elevator",
                            "Hardwood Floors",
                            "Heating",
                            "High Speed Internet Access",
                            "Intercom",
                            "Kitchen",
                            "Large Bedrooms",
                            "Laundry Facilities",
                            "Maintenance on site",
                            "Microwave",
                            "Oven",
                            "Property Manager on Site",
                            "Public Transportation",
                            "Range",
                            "Recycling",
                            "Refrigerator",
                            "Smoke Free",
                            "Sprinkler System",
                            "Stainless Steel Appliances",
                            "Tub/Shower",
                            "Views",
                            "Vintage Building",
                            "Walk-In Closets"
                        ],
                        "parent_category": "Community"
                    },
                    {
                        "category": "Unit Features",
                        "text": [
                            "Controlled Access",
                            "Courtyard",
                            "Dishwasher",
                            "Microwave",
                            "Refrigerator",
                            "View"
                        ],
                        "parent_category": "Unit"
                    }
                ],
                "client_display_flags": {
                    "presentation_status": "for_rent",
                    "is_showcase": true,
                    "lead_form_phone_required": true,
                    "price_change": 0,
                    "has_specials": false,
                    "is_mls_rental": false,
                    "is_rental_community": true,
                    "is_rental_unit": false,
                    "is_co_star": true,
                    "is_apartmentlist": false,
                    "suppress_map_pin": false,
                    "suppress_phone_call_lead_event": true,
                    "price_reduced": false,
                    "allows_cats": true,
                    "allows_dogs": false,
                    "has_matterport": true
                },
                "products": [
                    "enhanced",
                    "management_other_listings",
                    "management_company_logo",
                    "management_company_name",
                    "management_company_website",
                    "_COMMUNITY_RENTAL",
                    "_COMMUNITY_RENTAL",
                    "_COMMUNITY_RENTAL",
                    "_COMMUNITY_RENTAL",
                    "_COMMUNITY_RENTAL"
                ],
                "management": {
                    "email": "rentalservice@move.com",
                    "id": "1",
                    "name": "Warrington Apartments, LP Attn: Scott Heiser",
                    "type": "management",
                    "state_license": null,
                    "phones": []
                },
                "office": {
                    "hours": [
                        {
                            "day": [
                                "monday"
                            ],
                            "start_time": "9:00 AM"
                        },
                        {
                            "day": [
                                "tuesday"
                            ],
                            "end_time": "5:00 PM"
                        },
                        {
                            "day": [
                                "wednesday"
                            ],
                            "start_time": "9:00 AM",
                            "end_time": "5:00 PM"
                        },
                        {
                            "day": [
                                "thursday"
                            ],
                            "start_time": "9:00 AM",
                            "end_time": "5:00 PM"
                        },
                        {
                            "day": [
                                "friday"
                            ],
                            "start_time": "Closed",
                            "end_time": "Closed"
                        },
                        {
                            "day": [
                                "saturday"
                            ],
                            "start_time": "Closed",
                            "end_time": "Closed"
                        },
                        {
                            "day": [
                                "sunday"
                            ],
                            "start_time": "Closed",
                            "end_time": "Closed"
                        }
                    ],
                    "id": "2",
                    "name": "Warrington Apartments",
                    "type": "community",
                    "state_license": null,
                    "phones": []
                },
                "lead_forms": {
                    "form": {
                        "name": {
                            "required": true,
                            "minimum_character_count": 1
                        },
                        "email": {
                            "required": true,
                            "minimum_character_count": 5
                        },
                        "move_in_date": {
                            "required": true,
                            "default_date": "2022-03-01T12:00:00Z",
                            "minimum_days_from_today": 1,
                            "maximum_days_from_today": 180
                        },
                        "phone": {
                            "required": true,
                            "minimum_character_count": 10,
                            "maximum_character_count": 11
                        },
                        "message": {
                            "required": false,
                            "minimum_character_count": 0
                        },
                        "show": true
                    },
                    "show_agent": false,
                    "show_broker": false,
                    "show_provider": true,
                    "show_management": true
                },
                "lot_size": {
                    "size": 0,
                    "units": "sqft"
                },
                "building_size": {
                    "units": "sqft"
                },
                "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/775-Post-St_San-Francisco_CA_94109_M91523-64629",
                "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/775-Post-St_San-Francisco_CA_94109_M91523-64629",
                "photo_attribution": [
                    "Provided by"
                ],
                "mortgage": {
                    "rates_url": "http://www.realtor.com/mortgage/rates/?from=mobile#&zip=94109&property_price=undefined&mlid=2932377047"
                },
                "community": {
                    "baths_max": 1,
                    "baths_min": 1,
                    "beds_max": 3,
                    "beds_min": 0,
                    "floor_plan_count": 4,
                    "id": 2450575,
                    "name": "Warrington Apartments",
                    "matterport": {
                        "image_url": "",
                        "video_key": null
                    },
                    "price_max": 3600,
                    "price_min": 1600,
                    "source_id": "14znvw5",
                    "sqft_max": 1200,
                    "sqft_min": 500,
                    "unit_count": 45
                },
                "floor_plans": [
                    {
                        "availability": {
                            "available": null,
                            "date": "2021-12-15",
                            "href": null,
                            "text": "Now",
                            "status": null
                        },
                        "baths": 1,
                        "baths_half": 0,
                        "beds": 0,
                        "deposit_hint": "CALL",
                        "id": 1065316,
                        "name": "Small Studio",
                        "photo": {
                            "href": "https://ar.rdcpix.com/174e8843ea77c85b3d2adbc70b8f6d63p-f175682792o.jpg"
                        },
                        "photo_count": 1,
                        "price": 1600,
                        "sqft": 500,
                        "type": null
                    },
                    {
                        "availability": {
                            "available": null,
                            "date": "2022-01-10",
                            "href": null,
                            "text": "Now",
                            "status": null
                        },
                        "baths": 1,
                        "baths_half": 0,
                        "beds": 1,
                        "deposit": 2700,
                        "id": 1382500,
                        "name": "One Bedroom",
                        "photo": {
                            "href": "https://ar.rdcpix.com/83fb37b7b82f4497f7a03daaf683fa00p-f2970032694o.jpg"
                        },
                        "photo_count": 1,
                        "price": 2700,
                        "sqft": 900,
                        "type": null
                    },
                    {
                        "availability": {
                            "available": null,
                            "date": "2021-11-05",
                            "href": null,
                            "text": "Now",
                            "status": null
                        },
                        "baths": 1,
                        "baths_half": 0,
                        "beds": 3,
                        "deposit_hint": "CALL",
                        "id": 519226,
                        "name": "Three Bedroom",
                        "photo": {
                            "href": "https://ar.rdcpix.com/452934d84b20065bb0637ebeef88d364p-f908166114o.jpg"
                        },
                        "photo_count": 1,
                        "price": 3600,
                        "sqft": 1200,
                        "type": null
                    },
                    {
                        "availability": {
                            "available": null,
                            "date": "2021-07-29",
                            "href": null,
                            "text": "Now",
                            "status": null
                        },
                        "baths": 1,
                        "baths_half": 0,
                        "beds": 2,
                        "deposit_hint": "CALL",
                        "id": 616357,
                        "name": "Two Bedroom",
                        "photo_count": 0,
                        "price": 3600,
                        "sqft": 1200,
                        "type": null
                    }
                ],
                "data_source_name": "co-star",
                "source": "community",
                "detail_tracking": "type|property|data|prop_id|9152364629|list_id|2932377047|comm_id|2450575|address|city|San+Francisco|state|CA|postal|94109|neighborhood|Lower+Nob+Hill|county|San+Francisco|detail_branding|listing_agent|listing_office|data_source|co-star|property_status|product_code|advantage_code^0|0|3K2|D1C|0^^$0|1|2|$3|4|5|6|7|8|9|$A|B|C|D|E|F|G|H|I|J]|K|$L|S|M|T]|N|O|P|U|Q|V|R|W]]",
                "lease_terms": "12 months",
                "photo_count": 40,
                "photos": [
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2970032694s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4038894128s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3735425443s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2148210049s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1672988142s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3362565081s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3332859584s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f683312861s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2941598587s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f730029761s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4271681248s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4087378732s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f798256854s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4167801081s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f4163665312s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f908166114s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3560114584s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f627509955s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f175682792s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1092314435s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3215362604s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f503736190s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3458372668s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3555327280s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3936192254s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f176163578s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1206937021s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2353704581s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f858351241s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3350410295s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3904291077s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f942726175s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f687875871s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f325382616s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f348487383s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f392284984s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f1466513212s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f2822006638s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f3760797903s.jpg"
                    },
                    {
                        "href": "https://ar.rdcpix.com/72295b01b3c92221621dadf5930fef95c-f488593214s.jpg"
                    }
                ],
                "schools": [
                    {
                        "nces_id": "063441005659",
                        "id": "078663201",
                        "greatschools_id": "0606424",
                        "name": "Redding Elementary School",
                        "education_levels": [
                            "elementary"
                        ],
                        "funding_type": "public",
                        "lat": 37.789643,
                        "lon": -122.41922,
                        "student_count": 240,
                        "student_teacher_ratio": 11.1,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94109",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "1421 Pine Street"
                        },
                        "phone": "(415) 749-3525",
                        "distance_in_miles": 0.3,
                        "grades": {
                            "range": {
                                "low": "K",
                                "high": "5"
                            }
                        },
                        "relevance": "assigned",
                        "ratings": {
                            "great_schools_rating": 7,
                            "parent_rating": 5
                        }
                    },
                    {
                        "nces_id": "063441005645",
                        "id": "078662841",
                        "greatschools_id": "0606400",
                        "name": "Marina Middle School",
                        "education_levels": [
                            "middle"
                        ],
                        "funding_type": "public",
                        "lat": 37.801718,
                        "lon": -122.436133,
                        "student_count": 790,
                        "student_teacher_ratio": 18.3,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94123",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "3500 Fillmore Street"
                        },
                        "phone": "(415) 749-3495",
                        "distance_in_miles": 1.5,
                        "grades": {
                            "range": {
                                "low": "6",
                                "high": "8"
                            }
                        },
                        "relevance": "assigned",
                        "ratings": {
                            "great_schools_rating": 6,
                            "parent_rating": 4
                        }
                    },
                    {
                        "nces_id": "069111110647",
                        "id": "078768341",
                        "greatschools_id": "0613785",
                        "name": "S.F. County Civic Center Secondary",
                        "education_levels": [
                            "middle",
                            "high"
                        ],
                        "funding_type": "public",
                        "lat": 37.780304,
                        "lon": -122.42292,
                        "student_count": 73,
                        "student_teacher_ratio": 4.9,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94102",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "727 Golden Gate Avenue"
                        },
                        "phone": "(415) 241-3000",
                        "distance_in_miles": 0.7,
                        "grades": {
                            "range": {
                                "low": "6",
                                "high": "12"
                            }
                        },
                        "relevance": "assigned",
                        "ratings": {
                            "great_schools_rating": 2,
                            "parent_rating": null
                        }
                    },
                    {
                        "nces_id": "063441007732",
                        "id": "078663441",
                        "greatschools_id": "0606442",
                        "name": "Tenderloin Community",
                        "education_levels": [
                            "elementary"
                        ],
                        "funding_type": "public",
                        "lat": 37.781981,
                        "lon": -122.419662,
                        "student_count": 314,
                        "student_teacher_ratio": 12.2,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94102",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "627 Turk Street"
                        },
                        "phone": "(415) 749-3567",
                        "distance_in_miles": 0.5,
                        "grades": {
                            "range": {
                                "low": "K",
                                "high": "5"
                            }
                        },
                        "relevance": "nearby",
                        "ratings": {
                            "great_schools_rating": 3,
                            "parent_rating": 4
                        }
                    },
                    {
                        "nces_id": "063441005590",
                        "id": "078662061",
                        "greatschools_id": "0606346",
                        "name": "Carmichael (Bessie)/Fec",
                        "education_levels": [
                            "elementary",
                            "middle"
                        ],
                        "funding_type": "public",
                        "lat": 37.776391,
                        "lon": -122.406617,
                        "student_count": 625,
                        "student_teacher_ratio": 23.2,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94103",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "375 Seventh Street"
                        },
                        "phone": "(415) 355-6916",
                        "distance_in_miles": 0.9,
                        "grades": {
                            "range": {
                                "low": "K",
                                "high": "8"
                            }
                        },
                        "relevance": "nearby",
                        "ratings": {
                            "great_schools_rating": 3,
                            "parent_rating": 4
                        }
                    },
                    {
                        "nces_id": "060013911410",
                        "id": "078785701",
                        "greatschools_id": "0614999",
                        "name": "San Francisco County Rop School",
                        "education_levels": [
                            "high"
                        ],
                        "funding_type": "public",
                        "lat": 37.775533,
                        "lon": -122.406325,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94121",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "750 25th Avenue"
                        },
                        "phone": "(415) 379-7764",
                        "distance_in_miles": 0.9,
                        "grades": {
                            "range": {
                                "low": "10",
                                "high": "12"
                            }
                        },
                        "relevance": "nearby",
                        "ratings": {
                            "great_schools_rating": null,
                            "parent_rating": null
                        }
                    },
                    {
                        "nces_id": "A9900640",
                        "id": "078735611",
                        "greatschools_id": "0611493",
                        "name": "San Francisco City Academy",
                        "education_levels": [
                            "elementary",
                            "middle"
                        ],
                        "funding_type": "private",
                        "lat": 37.783487,
                        "lon": -122.412313,
                        "student_count": 118,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94102",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "230 Jones Street"
                        },
                        "phone": "(415) 345-0924",
                        "distance_in_miles": 0.3,
                        "grades": {
                            "range": {
                                "low": "K",
                                "high": "8"
                            }
                        },
                        "relevance": "nearby",
                        "ratings": {
                            "great_schools_rating": null,
                            "parent_rating": 2
                        }
                    },
                    {
                        "nces_id": "00078372",
                        "id": "078692031",
                        "greatschools_id": "0608443",
                        "name": "Cathedral School For Boys",
                        "education_levels": [
                            "elementary",
                            "middle"
                        ],
                        "funding_type": "private",
                        "lat": 37.792306,
                        "lon": -122.413302,
                        "student_count": 261,
                        "location": {
                            "city_slug_id": "San-Francisco_CA",
                            "postal_code": "94108",
                            "state": "CA",
                            "county": "San Francisco",
                            "city": "San Francisco",
                            "street": "1275 Sacramento Street"
                        },
                        "phone": "(415) 771-6600",
                        "distance_in_miles": 0.4,
                        "grades": {
                            "range": {
                                "low": "K",
                                "high": "8"
                            }
                        },
                        "relevance": "nearby",
                        "ratings": {
                            "great_schools_rating": null,
                            "parent_rating": 4
                        }
                    }
                ]
            }
        ]
    }

    return result;
};
