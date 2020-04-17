package com.fitme.model.keys;

import java.io.Serializable;
import java.time.YearMonth;

import javax.persistence.Convert;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fitme.model.User;
import com.fitme.util.YearMonthDateAttributeConverter;

@Embeddable
public class MonthlyMeasurementChartCompositeKey implements Serializable{
	
	private static final long serialVersionUID = 1653481680192381759L;
	
	@ManyToOne
	@JoinColumn(name="email", referencedColumnName = "email")
	private User user;
	
	/*Storing the YEAR-MONTH only. There is no direct mapping for YearMonth in JPA, so need to provide a Custom Converter*/
	@Convert(converter = YearMonthDateAttributeConverter.class)
	private YearMonth date;
	
	public MonthlyMeasurementChartCompositeKey() {
		this.date = YearMonth.now();
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public YearMonth getDate() {
		return date;
	}

	public void setDate(YearMonth date) {
		this.date = date;
	}
	
	

}
