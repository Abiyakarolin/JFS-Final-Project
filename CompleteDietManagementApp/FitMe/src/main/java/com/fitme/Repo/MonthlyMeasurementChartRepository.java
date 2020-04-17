package com.fitme.Repo;

import java.time.YearMonth;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fitme.model.MonthlyMeasurementChart;
import com.fitme.model.keys.MonthlyMeasurementChartCompositeKey;

public interface MonthlyMeasurementChartRepository extends CrudRepository<MonthlyMeasurementChart, MonthlyMeasurementChartCompositeKey> {

	
	/**
	 * Find Monthly Measurement Charts of a User which are sorted by increasing order of date.
	 * 
	 * @param userid
	 * @return Set of Monthly Measurement Charts
	 */
	@Query("SELECT ml FROM MonthlyMeasurementChart ml WHERE ml.id.user.email=:userid order by ml.id.date")
	public Set<MonthlyMeasurementChart> findMonthlyMeasurementChartHistoryByUser(@Param("userid") String userid);
	
	/**
	 * Find Set of User IDs who belong to the group passed and who have filled
	 * in the charts for the month-year passed.
	 * 
	 * @param groupid
	 * @param date
	 * @return Set of User IDs
	 */
	@Query("SELECT ml.id.user.email FROM MonthlyMeasurementChart ml WHERE ml.id.user.groupsId.groupsId=:groupid AND ml.id.date=:date")
	public Set<String> findMonthlyMeasurementChartUserListByGroupAndYearMonth(@Param("groupid") String groupid,  @Param("date") YearMonth date);
}
