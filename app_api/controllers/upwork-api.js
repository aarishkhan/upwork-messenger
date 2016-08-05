/**
 * Created by Aarish on 8/2/16.
 */

const upwork = require ('node-upwork');

const o = new upwork(process.env.UPWORK_API_KEY, process.env.UPWORK_API_KEY_SECRET);

o.OAuth.getAuthorizeUrl(function(error, url, requestToken, requestTokenSecret) {
 if(error){
  console.log(error.message);
 }
 console.log(url, requestToken, requestTokenSecret);
});


function getTeamsUserHasJoined() {

 return [
  {
   'company__reference'    : '12345',
   'company_name'          : 'Company1',
   'id'                    : 'teamalpha',
   'name'                  : 'Team1',
   'parent_team__id'       : 'abcdfghijk',
   'parent_team__name'     : 'A Test Company',
   'parent_team__reference': '12345',
   'reference'             : '12345'
  },
  {
   'company__reference'    : '12345',
   'company_name'          : 'Company2',
   'id'                    : 'teambeta',
   'name'                  : 'Team1',
   'parent_team__id'       : 'abcdfghijk',
   'parent_team__name'     : 'A Test Company',
   'parent_team__reference': '12345',
   'reference'             : '12345'
  }
]
}

function getTeamRoomById(){
return [
  {
   'account_status': 'enabled',
   'active_window_title': 'Upwork Team Client',
   'activity': '5',
   'billing_status': 'billed.active',
   'cellts': '1404472378',
   'client_version': '',
   'company_id': 'abcdf12345',
   'computer_name': '',
   'digest': '',
   'keyboard_events_count': '223',
   'last_worked': '1404472378',
   'last_worked_snapshot_api': '/api/team/v1/snapshots...',
   'last_worked_status': 'now',
   'memo': 'New Upwork Public API documentation',
   'mouse_events_count': '0',
   'online_presence': '13,6,6,0,26,73,33,20',
   'online_presence_img': 'https://...',
   'portrait_50_img': 'https://...',
   'portrait_img': 'https://...',
   'profile_url': 'https://...',
   'report24_img': 'https://...',
   'report_url': 'https://...',
   'role': 'contractor',
   'screenshot_img': 'https://...',
   'screenshot_img_lrg': 'https://...',
   'screenshot_img_med': 'https://...',
   'screenshot_img_thmb': 'https://...',
   'screenshot_url': 'https://...',
   'snapshot_api': '/api/team/v1/snapshots...',
   'status': 'NORMAL',
   'time': '1404472378',
   'timezone': 'UTC+07:00 Bangkok, Jakarta, Hanoi',
   'uid': '',
   'user': {'archiving_time': '1404086400',
    'creation_time': '1376941475',
    'first_name': 'John',
    'last_name': 'Johnson',
    'mail': 'john_johnson@example.com',
    'messenger_id': '',
    'messenger_type': '',
    'timezone': 'Asia/Bangkok',
    'timezone_offset': '25200',
    'uid': 'john_johnson'},
   'user_id': 'john_johnson',
   'view_assignment_url': 'https://...',
   'workdiary_api': '/api/team/v1/workdiaries...'}]


}


