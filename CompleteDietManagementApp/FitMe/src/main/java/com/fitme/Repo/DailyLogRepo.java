package com.fitme.Repo;

import java.time.LocalDate;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fitme.model.DailyLog;
import com.fitme.model.keys.DailyLogCompositeKey;

public interface DailyLogRepo extends CrudRepository<DailyLog, DailyLogCompositeKey> {

	/**
	 * Find Daily logs of a User which are sorted by increasing order of date
	 * 
	 * @param userid
	 * @return Set of Daily Logs
	 */
	@Query("SELECT dl FROM DailyLog dl WHERE dl.dailyLogKey.user.email=:userid order by dl.dailyLogKey.date")
	Set<DailyLog> findDailyLogHistoryByUser(@Param("userid") String userid);

	/**
	 * Find Set of User Ids who belong to the group passed and who have filled
	 * in the logs for the date passed.
	 * 
	 * @param groupid
	 * @param localDate
	 * @return Set of User IDs
	 */
	@Query("SELECT dl.dailyLogKey.user.email FROM DailyLog dl WHERE dl.dailyLogKey.user.groupsId.groupsId=:groupsid AND dl.dailyLogKey.date=:date")
	Set<String> findDailyLogUserListByGroupAndDate(@Param("groupsid")String groupsId, @Param("date") LocalDate localDate);

	
	/**
	 * Find Set of User Ids who belong to the batch passed and who have filled
	 * in the logs for the date passed.
	 * 
	 * @param batchid
	 * @param localDate
	 * @return Set of User IDs
	 */
	@Query("SELECT dl.dailyLogKey.user.email FROM DailyLog dl WHERE dl.dailyLogKey.user.groupsId.batch.batchId=:batchid AND dl.dailyLogKey.date=:date")
	Set<String> findDailyLogUserListByBatchAndDate(@Param("batchid")String batchid, @Param("date") LocalDate now);

}
