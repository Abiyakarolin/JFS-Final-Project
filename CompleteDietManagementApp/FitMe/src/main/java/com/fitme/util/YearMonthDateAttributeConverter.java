package com.fitme.util;

import java.sql.Date;
import java.time.Instant;
import java.time.YearMonth;
import java.time.ZoneId;

import javax.persistence.AttributeConverter;

public class YearMonthDateAttributeConverter implements AttributeConverter<YearMonth, java.sql.Date> {

	@Override
	public Date convertToDatabaseColumn(YearMonth attribute) {
		return java.sql.Date.valueOf(attribute.atDay(1)); //1st of the Month
	}

	@Override
	public YearMonth convertToEntityAttribute(Date dbData) {
		return YearMonth.from(Instant.ofEpochMilli(dbData.getTime())
		        .atZone(ZoneId.systemDefault())
		        .toLocalDate());
	}

}
