# SharaAction
* Декодер ServerAction из одной очень круглой игры.

## Настройка
1. Установите NodeJS
2. Скачайте/клонируйте репозиторий
3. Пропишите `npm i`
4. Введите лог. данные в `index.js` в переменной `LOG_DATA` (как вариант, можно сгенерировать их [тут](https://tailsjs.fun/api/shara/register))
5. `node index`
## Пример успешной работы
```xml
<response>
	<config>
		<item Id="1" Parameter="AccessRoleFlags" Value="0" Type="number" />
		<item Id="3" Parameter="IsPreloaderFast" Value="0" Type="bool" />
		<item Id="4" Parameter="InitialVolumeValue" Value="1" Type="number" />
		<item Id="6" Parameter="IsPreloaderEnabled" Value="1" Type="bool" />
		<item Id="7" Parameter="IsStartupHomeLocation" Value="0" Type="bool" />
		<item Id="8" Parameter="SwfVersion" Value="" Type="string" />
		<item Id="9" Parameter="SynchronizeAvatarRotation" Value="1" Type="bool" />
		<item Id="10" Parameter="StatisticsSendInterval" Value="0" Type="number" />
		<item Id="12" Parameter="LanguageId" Value="1" Type="number" />
		<item Id="13" Parameter="SnId" Value="1" Type="number" />
		<item Id="14" Parameter="IsInternational" Value="0" Type="bool" />
		<item Id="15" Parameter="AutoServerSelectionAllowed" Value="1" Type="bool" />
		<item Id="16" Parameter="DaysToFullSoil" Value="28" Type="number" />
		<item Id="17" Parameter="DaysToHalfSoil" Value="14" Type="number" />
		<item Id="18" Parameter="CurrentQuest" Value="497" Type="number" />
		<item Id="20" Parameter="TypeWeapon" Value="0" Type="number" />
		<item Id="21" Parameter="SkipTutorial" Value="1" Type="bool" />
		<item Id="23" Parameter="CurrentQuestGroup" Value="6220" Type="string" />
		<item Id="24" Parameter="IsNewRegistration" Value="1" Type="bool" />
		<item Id="25" Parameter="IsMotivatingAdsOn" Value="1" Type="bool" />
		<item Id="26" Parameter="VersionMode" Value="1" Type="number" />
		<item Id="27" Parameter="CurrentRumbiscDiscount" Value="0" Type="number" />
		<item Id="28" Parameter="ColorUsersList" Value="3292976,1727242,9649678,32275080,3023087,7437825,15638408,27599983,8010247,35466679,2701183,4184530,10675247,4570509,8137107,1323693" Type="string" />
	</config>
	<system ServerDate="SDATE" RPath="fs/3p897j5lf4e0j.swf" RVersion="107" />
	<promotion>
		<i MRId="34694" State="1" />
	</promotion>
	<promotion_banner>
		<i MRId="19009" />
	</promotion_banner>
	<promotion_whats_new>
		<i Id="954" TypeId="1" MRId="34697" />
		<i Id="1602" TypeId="2" MRId="44003" />
		<i Id="1604" TypeId="2" MRId="44024" />
		<i Id="1606" TypeId="2" MRId="35650" />
		<i Id="1607" TypeId="2" MRId="44023" />
	</promotion_whats_new>
	<preloader>
		<i MRId="42273" ShowTime="2000" />
		<i MRId="44022" ShowTime="2000" />
	</preloader>
	<sn_status IsBinded="0" />
	<user_name Value="USERNAME" />
	<postcard />
	<licence_promotion>
		<item Id="1" GroupId="0" OrderId="0" MRId="14763" />
		<item Id="2" GroupId="0" OrderId="1" MRId="14764" />
		<item Id="3" GroupId="0" OrderId="2" MRId="14765" />
		<item Id="4" GroupId="1" OrderId="0" MRId="14766" />
		<item Id="5" GroupId="1" OrderId="1" MRId="14767" />
		<item Id="6" GroupId="1" OrderId="2" MRId="14768" />
		<item Id="7" GroupId="2" OrderId="0" MRId="20597" />
		<item Id="8" GroupId="2" OrderId="1" MRId="20598" />
		<item Id="9" GroupId="2" OrderId="2" MRId="20599" />
	</licence_promotion>
	<flags IsUserDetailsMissing="1" EntranceCount="0" />
	<tutorial>
		<item Id="-1" State="0" />
		<item Id="1" State="0" />
		<item Id="2" State="0" />
		<item Id="3" State="0" />
		<item Id="4" State="0" />
		<item Id="5" State="0" />
	</tutorial>
	<grants ReceivingCount="0" />
	<requests ReceivingCount="0" />
	<gift_box_group>
		<item Id="1" GroupId="3" />
		<item Id="2" GroupId="0" />
		<item Id="9" GroupId="0" />
		<item Id="10" GroupId="0" />
		<item Id="11" GroupId="0" />
		<item Id="12" GroupId="0" />
		<item Id="13" GroupId="0" />
		<item Id="14" GroupId="0" />
		<item Id="15" GroupId="0" />
		<item Id="16" GroupId="0" />
		<item Id="17" GroupId="0" />
		<item Id="18" GroupId="0" />
	</gift_box_group>
	<user UserId="USERID" hwId="HWID" ticketId="TICKET_ID" RoleFlags="0" />
	<servers>
		<item Id="4" TRId="218" RId="4" RTMPUrl="rtmp://37.112.251.98:3042" Url="wss://rts0.shararam.ru:3045/" Load="42" QuestLocationLoad="0" FriendsCount="0" ClubsCount="12" Weight="10.5" />
		<item Id="8" TRId="574" RId="3" RTMPUrl="rtmp://37.112.251.98:3032" Url="wss://rts0.shararam.ru:3035/" Load="48" QuestLocationLoad="0" FriendsCount="0" ClubsCount="8" Weight="8" />
		<item Id="10" TRId="576" RId="2" RTMPUrl="rtmp://37.112.251.98:3022" Url="wss://rts0.shararam.ru:3025/" Load="51" QuestLocationLoad="0" FriendsCount="0" ClubsCount="22" Weight="17.85" />
		<item Id="20" TRId="930" RId="8" RTMPUrl="rtmp://37.112.251.100:3082" Url="wss://rts2.shararam.ru:3085/" Load="100" QuestLocationLoad="0" FriendsCount="0" ClubsCount="30" Weight="21" />
		<item Id="29" TRId="1511" RId="1" RTMPUrl="rtmp://37.112.251.98:3012" Url="wss://rts0.shararam.ru:3015/" Load="44" QuestLocationLoad="0" FriendsCount="0" ClubsCount="16" Weight="13.4" />
	</servers>
</response>
```

## Полезные ссылки
* [Авторег смешариков](https://tailsjs.fun/api/shara/register)
* [Авторег смешариков, но в браузере (Нужно расширение)](https://tailsjs.fun/sharareg/)
* [Блог автора](https://t.me/tjsblog)
* [Связь с автором](https://t.me/tailsjs)
* [Очень круглая игра](https://shararam.ru)
