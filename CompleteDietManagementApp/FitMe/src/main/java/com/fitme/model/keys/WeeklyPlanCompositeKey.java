package com.fitme.model.keys;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.temporal.WeekFields;
import java.util.Locale;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;

import com.fitme.model.Groups;

@Embeddable
public class WeeklyPlanCompositeKey implements Serializable{
	
	private static final long serialVersionUID = 5499757611964850911L;
		
	private String weekMonth;
	
	@ManyToOne
	private Groups groupsId;

	public WeeklyPlanCompositeKey() {
		LocalDate now = LocalDate.now();
		String currentMonth = now.getMonth().toString();
		int currentWeekofMonth = now.get(WeekFields.of(Locale.getDefault()).weekOfMonth());
		this.weekMonth = currentWeekofMonth + "W-"+currentMonth;
	}

	public String getWeekMonth() {
		return weekMonth;
	}

	public void setWeekMonth(String weekMonth) {
		this.weekMonth = weekMonth;
	}

	public Groups getGroupsId() {
		return groupsId;
	}

	public void setGroupsId(Groups groupsId) {
		this.groupsId = groupsId;
	}
	
	
	
	
	

}
