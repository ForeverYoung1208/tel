class Card < ApplicationRecord
	self.inheritance_column = 'class_name'

	def self.import (file)
		begin
			res=''
		  spreadsheet = Roo::Spreadsheet.open(file.path)
		  header = spreadsheet.row(1)
		  (2..spreadsheet.last_row).each do |i|
		    row = Hash[[header, spreadsheet.row(i)].transpose]
		    product = find_by(id: row["id"]) || new
		    product.attributes = row.to_hash
		    product.save! ? res=res+"#{row["id"]}-OK," : res=res+"#{row["id"]}-skip,"
		  end
	
		rescue Exception => e
			res = "Exception: #{e.message}"
		end
		res
	end

end
